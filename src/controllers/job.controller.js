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
        const jobs = JobModel.getJob();
        res.render('jobs',{jobs});
    }
}