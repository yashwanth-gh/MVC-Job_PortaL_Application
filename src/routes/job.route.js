import express from 'express';
import JobController from '../controllers/job.controller.js';

const router = express.Router();
const jobController = new JobController();
router.route("/").get(jobController.getLandingPage)

export default router;