import { Router } from 'express';
import DocumentsController from '../../controllers/documents';

const router = Router();

router.get('/', DocumentsController.find.all);

router.post('/', DocumentsController.create);

// Delete document by id (DELETE /documents/id)
router.delete('/:id', DocumentsController.destroy);

export default router;

