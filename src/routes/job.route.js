import express from 'express';
import JobController from '../controllers/job.controller.js';

const router = express.Router();
const jobController = new JobController();
//* ========---------- Get routes -----------=========
router.route("/").get(jobController.getLandingPage)
router.route('/postjob').get(jobController.getPostJob);

router.route("/jobs").get(jobController.getAllJobs);
router.route("/job/:id").get(jobController.getSingleJob);
router.route("/update/:id").get(jobController.getUpdateJob);
router.route("/deleteJob/:id").get(jobController.deleteJob)

//* ========---------- Post routes -----------=========
router.route("/update/:id").post(jobController.postUpdateJob);
router.route('/postjob').post(jobController.postPostJob);
export default router;