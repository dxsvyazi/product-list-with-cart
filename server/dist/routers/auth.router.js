import { compare, genSalt } from 'bcrypt';
import { hash } from 'crypto';
import { Router } from 'express';
import { Messages } from '../shared/http.messages.js';
import jwt from 'jsonwebtoken';
import RefreshToken from '../model/refreshToken.model.js';
import User from '../model/user.model.js';
import { env } from '../shared/env.js';
const router = Router();
const verifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(403).send({ message: Messages.NoToken });
    }
    jwt.verify(token, env.JWT_KEY, (error, _) => {
        if (error) {
            return res.status(500).json({ error });
        }
        next();
    });
};
const createToken = async (userId) => jwt.sign({ id: userId }, env.JWT_KEY, {
    expiresIn: env.JWT_KEY_EXPIRES,
});
const createRefreshToken = async (userId) => {
    const expiredAt = new Date();
    expiredAt.setSeconds(expiredAt.getSeconds() + env.JWT_REFRESH_KEY_EXPIRES);
    const token = crypto.randomUUID();
    const refreshToken = new RefreshToken({
        token,
        user: userId,
        expiryDate: expiredAt.getTime(),
    });
    return await refreshToken.save();
};
const hasExpired = (token) => {
    return token.expiryDate.getTime() < new Date().getTime();
};
const getRefreshToken = async (userId) => {
    const oldToken = await RefreshToken.findOne({ user: userId });
    if (oldToken && hasExpired(oldToken)) {
        return oldToken;
    }
    RefreshToken.findOneAndDelete({ user: userId });
    return await createRefreshToken(userId);
};
router.get('/refresh', async (req, res) => {
    const { refreshToken = '' } = req.cookies;
    const oldToken = await RefreshToken.findOne({ token: refreshToken });
    const user = await User.findOne({ _id: oldToken?.user });
    if (!(oldToken && user)) {
        res.status(401).json({ message: Messages.InvalidRefreshToken });
        return;
    }
    const token = await createToken(user._id);
    const { email, login } = user;
    if (!hasExpired(oldToken)) {
        res
            .cookie('refreshToken', oldToken.token, {
            expires: oldToken.expiryDate,
            httpOnly: true,
        })
            .json({ token, email, login });
        return;
    }
    res.status(401).json({ message: Messages.RefreshTokenExpired });
});
router.post('/login', async (req, res) => {
    const { email = '', password = '' } = req.body;
    const user = await User.findOne({ email });
    if (!(user && compare(password, user.password))) {
        res.status(400).json({ message: Messages.InvalidEmailOrPassword });
        return;
    }
    const token = await createToken(user._id);
    const { login } = user;
    const { token: refreshToken, expiryDate } = await getRefreshToken(user._id);
    res
        .cookie('refreshToken', refreshToken, {
        expires: expiryDate,
        httpOnly: true,
    })
        .json({ token, email, login });
});
router.post('/registration', async (req, res) => {
    const { login = '', email = '', password = '' } = req.body;
    if (await User.findOne({ email })) {
        res.status(400).json({ message: Messages.UserExists });
        return;
    }
    const salt = await genSalt(3);
    const hashedPassword = hash(password, salt);
    const user = new User({ login, email, password: hashedPassword });
    const token = await createToken(user._id);
    const { token: refreshToken, expiryDate } = await createRefreshToken(user._id);
    try {
        await user.save();
        res
            .cookie('refreshToken', refreshToken, {
            expires: expiryDate,
            httpOnly: true,
        })
            .json({ token, email, login });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
export default router;
//# sourceMappingURL=auth.router.js.map