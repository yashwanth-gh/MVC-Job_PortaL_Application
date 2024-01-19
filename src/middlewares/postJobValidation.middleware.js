import { body, validationResult } from "express-validator"
import JobController from "../controllers/job.controller.js";
import JobModel from "../models/job.model.js";
const jobController = new JobController();


export const postJobValidation = async (req, res, next) => {

    const rules = [
        body('companyName').notEmpty().withMessage("Company Name is required"),
        body('jobLocation').notEmpty().withMessage("Job Location is required"),
        body('category').notEmpty().withMessage("Category field cannot be empty"),
        body('designation').notEmpty().withMessage("Designation field cannot be empty"),
        body('salary').notEmpty().withMessage("Salary is required"),
        body('openings').notEmpty().withMessage("Number of opening cannot be empty"),
        body('lastDate').notEmpty().withMessage("Last date to appy is required"),
        body('lastDate').isDate().withMessage("Last date format is not correct"),
        
        /* 
            body('applicantEmail').isEmail().withMessage("Enter valid E-mail"),
            body('applicantPhone').isMobilePhone("en-IN").withMessage("Enter valid E-mail"),
            body('applicantResume').custom((value,{req})=>{
                if(!req.file){
                    throw new Error('Resume file is required');
                  }
                  return true;
                }) 
                */
    ]

    await Promise.all(rules.map(rule => rule.run(req)));
    var errors = validationResult(req);

    if (!errors.isEmpty()) {
        if (req.url === '/postjob') return res.render('post-newjob', { errors: errors.array() });
        if (req.path.startsWith('/update/')) {
            const id = req.params.id;
            const jobById = JobModel.getJobById(id);
            if (!jobById) return res.status(404).render('404');
            return res.render("update-job", { job: jobById, errors: errors.array() })
        }
    }
    next();
}