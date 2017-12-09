import express from 'express';

import fruit from './fruit/router';
import animal from './animal/router';

const router = express.Router();

router.use('/v1/fruit', fruit);
router.use('/v1/animal', animal);

export default router;
