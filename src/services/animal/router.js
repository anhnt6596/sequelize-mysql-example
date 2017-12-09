import express from 'express';
import { createTable } from './controllers';

const router = express.Router();

router.get('/', createTable);


export default router;