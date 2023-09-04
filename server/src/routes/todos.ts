import { Router } from 'express'
import { getTodos, addTodo, updateTodo, deleteTodo } from '../controllers/todos'
import {auth} from "../middlewares/auth";

const router: Router = Router();

router.get('/', getTodos);

router.post('/', auth, addTodo);

router.patch('/:id', updateTodo);

router.delete('/:id', deleteTodo);

export default router
