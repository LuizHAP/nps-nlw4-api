import { Router } from 'express'
import { UserController } from './controllers/UserController';
import { SurveyController } from './controllers/SurveyController';

const router = Router();

const usersController = new UserController();
const surveysController = new SurveyController();

router.post('/users', usersController.create);

router.get('/surveys', surveysController.show);
router.post('/surveys', surveysController.create);

export { router }