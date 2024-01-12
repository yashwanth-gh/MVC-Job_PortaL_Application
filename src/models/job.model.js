import { v4 as uuidv4 } from 'uuid';

export default class JobModel {
    constructor(
        _id,
        _companyName,
        _jobLocation,
        _category,
        _designation,
        _salary,
        _openings,
        _lastDate,
        _skills,
        _jobPostedDate,
        _applicants) {
        this.id = _id;
        this.companyName = _companyName;
        this.jobLocation = _jobLocation;
        this.category = _category;
        this.designation = _designation;
        this.salary = _salary;
        this.openings = _openings;
        this.lastDate = _lastDate;
        this.skills = _skills;
        this.jobPostedDate = _jobPostedDate;
        this.applicants = _applicants;
    }
    //^ ------- Get job description array -------
    static getJob() {
        return job_description;
    }

    //^ ------- Add job object to Array -------
    static setJob(data) {
        const {
            companyName,
            jobLocation,
            category,
            designation,
            salary,
            openings,
            lastDate,
            skills } = data;
        const id = uuidv4();
        const skillArray = skills.split(",");
        const currentDate = new Date();
        const postedDate = currentDate.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' });
        const applicants = [];
        const newJob = new JobModel(
            id,
            companyName,
            jobLocation,
            category,
            designation,
            salary,
            openings,
            lastDate,
            skillArray,
            postedDate,
            applicants
        );

        job_description.push(newJob);
        console.log(newJob);
        // console.log(job_description);
    }

    //^ ------- Get job by id from array -------
    static getJobById(id){
        
        const data =  job_description.find(job=>job.id === id);
        if(!data){
            console.log("Error :: getJobById");
            return null;
        }
        return data;
    }
}


//^ ------------- Job-description data array ------------------
const job_description = [
    {
        id:'2eabf4f2-43e9-4c0a-a4d6-1f072857ce18',
        companyName: 'MicroLabs',
        jobLocation: 'Mumbai',
        category: 'Non-Tech',
        designation: 'Data entry',
        salary: '25000',
        openings: '5',
        lastDate: '2024-01-31',
        skills: ["Communication","Excel","Google Search"],
        postedDate: '20/01/2024',
        applicants: [],
    },
    {
        id:'bc3d91d3-8a7a-4f53-834c-e870ea5990fc',
        companyName: 'Paytm',
        jobLocation: 'Bengaluru',
        category: 'Tech',
        designation: 'SDE-1',
        salary: '50000',
        openings: '12',
        lastDate: '2024-03-01',
        skills: ["React","NodeJS","MongoDB", "DevOps"],
        postedDate: '20/01/2024',
        applicants: [],
    },
    {
        id:'f9e4a5c1-6e6e-495c-85bb-01c6e7e9e76d',
        companyName: 'Accenture',
        jobLocation: 'Hyderabad',
        category: 'Non-Tech',
        designation: 'HR',
        salary: '100000',
        openings: '4',
        lastDate: '2024-02-11',
        skills: ["Communication","Leadership"],
        postedDate: '20/01/2024',
        applicants: [],
    },
    {
        id:'2eabf4f2-6e6e-495c-834c-e8072857ce18',
        companyName: 'L&T Infotech',
        jobLocation: 'Chennai',
        category: 'Tech',
        designation: 'DevOps',
        salary: '150000',
        openings: '3',
        lastDate: '2024-03-21',
        skills: ["Docker","Kubernetes","MERN"],
        postedDate: '20/01/2024',
        applicants: [],
    }
]