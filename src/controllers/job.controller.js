import JobModel from "../models/job.model.js";

export default class JobController{
    getLandingPage(req,res){
        res.render('landing_page');
    }

    getPostJob(req,res){
        res.render('post-newjob');
    }

    postPostJob(req,res){
        JobModel.setJob(req.body);
        res.redirect("/jobs")
    }

    getAllJobs(req,res){
        const jobs = JobModel.getJob();
        res.render('jobs',{jobs})
    }

    getSingleJob(req,res){
        const id = req.params.id;
        const jobById = JobModel.getJobById(id);
        res.render('job_details',{jobById});
    }

    getUpdateJob(req,res){
        const id = req.params.id;
        const jobById = JobModel.getJobById(id);
        res.render("update-job",{job:jobById})
    }

    postUpdateJob(req,res){
        const id = req.params.id;
        const data = req.body;
        JobModel.updateJob(id,data);
        res.redirect("/jobs")
    }
}