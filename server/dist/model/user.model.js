import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    login: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
export default model('User', userSchema, 'users');
//# sourceMappingURL=user.model.js.map