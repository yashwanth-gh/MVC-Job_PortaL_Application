import express from 'express';
import JobController from '../controllers/job.controller.js';
import resumeUpload from '../middlewares/resumeUpload.middleware.js';
import { postJobValidation } from '../middlewares/postJobValidation.middleware.js';
import {auth} from '../middlewares/auth.middleware.js'
import { setLastVisit } from '../middlewares/lastVisit.middleware.js';
const router = express.Router();
const jobController = new JobController();
//* ========---------- Get routes -----------=========
router.route("/").get(jobController.getLandingPage)
router.route('/postjob').get(setLastVisit,auth,jobController.getPostJob);
router.route('/dashboard').get(setLastVisit,auth,jobController.getRecruiterDashboard);

router.route("/jobs").get(jobController.getAllJobs);
router.route("/jobs/:id").get(jobController.getSingleJob);
router.route("/update/:id").get(setLastVisit,jobController.getUpdateJob);
router.route("/deleteJob/:id").get(setLastVisit,jobController.deleteJob)
router.route("/jobs/:id/applicants").get(setLastVisit,jobController.getApplicants)


//* ========---------- Post routes -----------=========
router.route("/update/:id").post(postJobValidation,jobController.postUpdateJob);
router.route('/postjob').post(postJobValidation,jobController.postPostJob);
router.route('/jobs/:id/applicants').post(resumeUpload.single("applicantResume"),jobController.postApplicants);
export default router;