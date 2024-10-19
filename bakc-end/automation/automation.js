import { Job } from "../models/jobSchema.js"

export const automation = async()=>{

    const emails = await Job.find({}, { candidate: 1, _id: 0 });
    const number = 0
    // Schedule the task to run every 2 hours
cron.schedule('0 */2 * * *', () => {
    console.log('Sending email...');
  
    // Call the sendEmail function with desired parameters
    sendEmail(
      emails[(number +1)%emails.length()],
      'Automated Email',
      'This is an automated email sent every 2 hours.'
    );
  });
  
}