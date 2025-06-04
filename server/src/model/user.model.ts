import { Schema, model } from 'mongoose';

export interface UserI {
  login: string;
  email: string;
  password: string;
}

const userSchema = new Schema<UserI>({
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

export default model<UserI>('User', userSchema, 'users');
