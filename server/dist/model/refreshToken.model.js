import { Schema, Types, model } from 'mongoose';
const RefreshTokenSchema = new Schema({
    token: {
        type: String,
        required: true,
    },
    user: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    },
    expiryDate: {
        type: Date,
        required: true,
    },
});
export default model('RefreshToken', RefreshTokenSchema, 'refresh-tokens');
//# sourceMappingURL=refreshToken.model.js.map