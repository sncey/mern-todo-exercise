
/* 
import { model, Schema } from 'mongoose'

//TODO: Add types for schema

const todoSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true })


export default model('Todo', todoSchema)

*/

import { Schema, model, Document } from 'mongoose';
export interface ITodo extends Document {
    name: string;
    description: string;
    status: boolean;
    user: string;
    createdAt: Date;
    updatedAt: Date;
}
const todoSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true })
const Todo = model<ITodo>('Todo', todoSchema)
export default Todo


