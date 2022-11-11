import express from 'express';
const Router = express.Router();

import ApplicantController from '../controllers/applicantController';

Router.route('/')
    .get(ApplicantController.getAllApplicants)
    .post(ApplicantController.addNewApplicant)
    .delete(ApplicantController.deleteAllApplicants)

Router.route('/:applicantID')
    .get(ApplicantController.getSingleApplicant)
    .delete(ApplicantController.deleteSingleApplicant)
    .patch(ApplicantController.updateApplicant)

export default Router;