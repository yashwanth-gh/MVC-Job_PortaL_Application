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
        const id = job_description.length + 1;
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
        // console.log(job_description);
    }

    //^ ------- Get job by id from array -------
    static getJobById(id){
        const jobId = Number(id);
        const data =  job_description.find(job=>job.id === jobId);
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
        id:1,
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
        id:2,
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
        id:3,
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
        id:4,
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