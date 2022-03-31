import express from 'express';
import users from './users';
import documents from './documents';

const router = express.Router();

router.use('/api/user', users);
router.use('/api/document', documents);

export default router;
