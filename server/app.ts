import express from 'express';
const app = express();

import applicantRouter from './routes/applicantRoutes';

app.get('/test', (req, res) => {
    res.send("API running successfully");
})

app.use('/api/v1/applicant', applicantRouter);

export default app;