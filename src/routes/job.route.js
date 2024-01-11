import express from 'express';
import JobController from '../controllers/job.controller.js';

const router = express.Router();
const jobController = new JobController();
router.route("/").get(jobController.getLandingPage)
router.route('/postjob').get(jobController.getPostJob);
router.route('/postjob').post(jobController.postPostJob);

export default router;