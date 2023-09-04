import Todo from '../../models/todo'
import {Request, Response} from "express";

const getTodos = async (req: Request, res: Response) => {

    // TODO: use query params to filter todos where {status: true}

    try {
        const statusFilter = req.query.status;
        console.log(statusFilter)
        if(statusFilter === 'true') {

            const todos = await Todo.find({status: true});
            res.status(200).json({todos})
        }
    } catch (error) {
        throw error
    }
}

const addTodo = async (req: any, res: any) => {

    try {
        const body = req.body

        const todo = new Todo({
            name: body.name,
            description: body.description,
            status: body.status,
            user: req.user._id
        })

        const newTodo = await todo.save()

        res.status(201).json({message: 'Todo added', todo: newTodo})
    } catch (error) {
        throw error
    }
}

const updateTodo = async (req: any, res: any) => {
    //TODO: make sure users can't update other users todos.

    try {
        const {
            params: {id},
            body,
        } = req
        const updateTodo = await Todo.findByIdAndUpdate(
            {_id: id},
            body
        )
        res.status(200).json({
            message: 'Todo updated',
            todo: updateTodo
        })
    } catch (error) {
        throw error
    }
}

const deleteTodo = async (req: any, res: any) => {
    //TODO: make sure users can't delete other users todos.

    try {
        const deletedTodo = await Todo.findByIdAndRemove(
            req.params.id
        )
        res.status(200).json({
            message: 'Todo deleted',
            todo: deletedTodo
        })
    } catch (error) {
        throw error
    }
}

export {getTodos, addTodo, updateTodo, deleteTodo}
