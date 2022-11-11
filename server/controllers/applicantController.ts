const getAllApplicants = (req, res) => {
    res.send("Get all Applicants");
}

const getSingleApplicant = (req, res) => {
    res.send(`This is applicant ${req.params.applicantID}`);
}

const addNewApplicant = (req, res) => {
    res.send("Creating new applicant");
}

const deleteAllApplicants = (req, res) => {
    res.send("Deleting all applicants");
}

const deleteSingleApplicant = (req, res) => {
    res.send(`Deleting applicant ${req.params.applicantID}`);
}

const updateApplicant = (req, res) => {
    res.send(`Updating applicant ${req.params.applicantID}`);
}

export default { getAllApplicants, getSingleApplicant, addNewApplicant, deleteAllApplicants, deleteSingleApplicant, updateApplicant }

