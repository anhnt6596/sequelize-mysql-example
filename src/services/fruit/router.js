import express from 'express';
import { getAll, getById, add, deleteById, createTable, editById } from './controllers';

const router = express.Router();

router.get('/createtable', createTable);

router.get('/', getAll);

router.get('/get/:id', getById);

router.post('/add', add);

router.post('/delete', deleteById);

router.post('/edit', editById);

export default router;