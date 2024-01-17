import nodemailer, { createTransport } from 'nodemailer'
import fs from 'fs'
import path from 'path'

const transporter = createTransport({
    service : "gmail",
    auth:{
        user: "codingninjas2k16@gmail.com",
        pass: "slwvvlczduktvhdj",
    }
})

const mailTemplatePath = path.resolve("src", "public", "html", "jobAppliedMail.html");

export const sendConformationMail = async ({applicantName,applicantEmail},{companyName,jobLocation,designation})=>{

    const mailBodyTemplate = fs.readFileSync(mailTemplatePath,"utf-8");
    const personalizedHtml = mailBodyTemplate
    .replace("{{USERNAME}}", applicantName)
    .replace("{{COMPANY_NAME}}", companyName)
    .replace("{{JOB_TYPE}}", designation)
    .replace("{{LOCATION}}", jobLocation);

    const data = {
        from: "codingninjas2k16@gmail.com",
        to: applicantEmail,
        subject: "Job Application Received",
        html: personalizedHtml,
    }

    transporter.sendMail(data,(err,info)=>{
        if(err){
            console.log(err);
        }else{
            console.log("mail sent!");  
        }
    });
};
