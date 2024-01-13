import express from 'express';
import JobController from '../controllers/job.controller.js';

const router = express.Router();
const jobController = new JobController();
//* ========---------- Get routes -----------=========
router.route("/").get(jobController.getLandingPage)
router.route('/postjob').get(jobController.getPostJob);
router.route('/postjob').post(jobController.postPostJob);

router.route("/jobs").get(jobController.getAllJobs);
router.route("/job/:id").get(jobController.getSingleJob);
router.route("/update/:id").get(jobController.getUpdateJob);

//* ========---------- Post routes -----------=========
router.route("/update/:id").post(jobController.postUpdateJob);
export default router;