import { sendConformationMail } from "../middlewares/sendMail.middleware.js";
import JobModel from "../models/job.model.js";

export default class JobController {
    getLandingPage(req, res) {
        const userName = req.session.userEmail;
        res.render('landing_page',{userName});
    }

    getPostJob(req, res) {
        res.render('post-newjob', { errors: null });
    }

    postPostJob(req, res) {
        JobModel.setJob(req.body);
        res.redirect("/jobs")
    }

    getAllJobs(req, res) {
        const jobs = JobModel.getJob();
        if (!jobs) return res.status(404).render('404'); //TODO:
        res.render('jobs', { jobs })
    }

    getSingleJob(req, res) {
        const id = req.params.id;
        const jobById = JobModel.getJobById(id);
        if (!jobById) return res.status(404).render('404');
        res.render('job_details', { jobById });
    }

    getUpdateJob(req, res) {
        const id = req.params.id;
        const jobById = JobModel.getJobById(id);
        if (!jobById) return res.status(404).render('404');

        res.render("update-job", { job: jobById, errors: null })
    }

    postUpdateJob(req, res) {

        const id = req.params.id;
        const data = req.body;
        JobModel.updateJob(id, data);
        res.redirect("/jobs")
    }

    deleteJob(req, res) {
        const id = req.params.id;
        const jobById = JobModel.getJobById(id);
        if (!jobById) return res.status(404).render('404');

        JobModel.deleteJob(id);
        res.redirect("/jobs"); //FIXME: may couse error in future bcz static file send us to /jobs page
    }

    async postApplicants(req, res) {
        const id = req.params.id;
        const fname = req.file.filename;
        const data = req.body;
        if (id) {
            JobModel.addApplicants(id, data, fname);
            const job = JobModel.getJobById(id);
            console.log("Sending Conformation email to user!")
            await sendConformationMail(data, job);
        }
        res.redirect("/jobs");
    }

    getApplicants(req, res) {
        const id = req.params.id;
        const jobApplicants = JobModel.getApplicants(id);
        // console.log(jobApplicants);
        res.render('applicants', { allApplicants: jobApplicants });
    }
}