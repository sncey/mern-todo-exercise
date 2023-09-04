/*
import {model, Schema} from 'mongoose'

//TODO: Add types for schema
const userSchema: Schema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

}, {timestamps: true})

export default model('User', userSchema)
*/

import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const User = model<IUser>('User', userSchema);

export default User;
