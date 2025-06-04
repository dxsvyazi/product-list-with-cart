import { Schema, Types, model } from 'mongoose';
import { UserI } from './user.model.js';

export interface RefreshTokenI {
  token: string;
  user: UserI;
  expiryDate: Date;
}

const RefreshTokenSchema = new Schema<RefreshTokenI>({
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
