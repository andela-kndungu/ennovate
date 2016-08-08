import { Router } from 'express';

import CategoriesController from '../../controllers/categories';

const router = Router();

router.get('/', CategoriesController.find.all);

router.post('/', CategoriesController.create);

module.exports = router;

