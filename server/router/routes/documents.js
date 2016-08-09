import { Router } from 'express';
import DocumentsController from '../../controllers/documents';

const router = Router();

router.post('/', DocumentsController.create);

export default router;

