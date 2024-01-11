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
}


//^ ------------- Job-description data array ------------------
const job_description = [
    {
        companyName: 'microsoft',
        jobLocation: 'mumbai',
        category: 'Non-Tech',
        designation: 'Data entry',
        salary: '25000',
        openings: '5',
        lastDate: '2024-01-31',
        skills: [],
        postedDate: '20/01/2024',
        applicants: [],
    }
]