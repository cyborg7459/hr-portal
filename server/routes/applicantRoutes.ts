import express from 'express';
const Router = express.Router();

import applicantController from '../controllers/applicantController';

Router.route('/')
    .get(applicantController.getAllApplicants)
    .post(applicantController.addNewApplicant)
    .delete(applicantController.deleteAllApplicants)

Router.route('/:applicantID')
    .get(applicantController.getSingleApplicant)
    .delete(applicantController.deleteSingleApplicant)
    .patch(applicantController.updateApplicant)

export default Router;