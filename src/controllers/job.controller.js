import { sendConformationMail } from "../middlewares/sendMail.middleware.js";
import JobModel from "../models/job.model.js";

export default class JobController {
    getLandingPage(req, res) {
        const user = req.session.user;
        res.render('landing_page', { user });
    }

    getPostJob(req, res) {
        const user = req.session.user;
        res.render('post-newjob', { errors: null,user });
    }

    postPostJob(req, res) {
        JobModel.setJob(req.body,req.session.user);
        res.redirect("/jobs")
    }

    getAllJobs(req, res) {
        const jobs = JobModel.getJob();
        const user = req.session.user;
        if (!jobs) return res.status(404).render('404',{user}); //TODO:
        res.render('jobs', { jobs,user })
    }

    getSingleJob(req, res) {
        const id = req.params.id;
        const jobById = JobModel.getJobById(id);
        const user = req.session.user;
        if (!jobById) return res.status(404).render('404',{user});
        res.render('job_details', { jobById, user });
    }

    getUpdateJob(req, res) {
        const id = req.params.id;
        const jobById = JobModel.getJobById(id);
        const user = req.session.user;
        if (!jobById) return res.status(404).render('404',{user});
        res.render("update-job", { job: jobById, errors: null,user })
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
        const user = req.session.user;
        if (!jobById) return res.status(404).render('404',{user});

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
        const user = req.session.user;
        res.render('applicants', { allApplicants: jobApplicants ,user});
    }

    getRecruiterDashboard(req,res){
        const user = req.session.user;
        res.render('recruiter_dashboard', {user});
    }
}