import { Request, Response } from 'express';

class ApplicantController {
    getAllApplicants = (req: Request, res: Response) => {
        res.send("Get all Applicants");
    }

    getSingleApplicant = (req: Request, res: Response) => {
        res.send(`This is applicant ${req.params.applicantID}`);
    }

    addNewApplicant = (req: Request, res: Response) => {
        res.send("Creating new applicant");
    }

    deleteAllApplicants = (req: Request, res: Response) => {
        res.send("Deleting all applicants");
    }

    deleteSingleApplicant = (req: Request, res: Response) => {
        res.send(`Deleting applicant ${req.params.applicantID}`);
    }

    updateApplicant = (req: Request, res: Response) => {
        res.send(`Updating applicant ${req.params.applicantID}`);
    }
}

export default new ApplicantController();

