'use server'
 
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import mailProvider from "node-mailjet";
import BodyMail from '@/models/bodtMail';

export default async function MailSender(body:BodyMail){
    const mailjet= new mailProvider({
        apiKey:process.env.API_KEY,
        apiSecret:process.env.SECRET_KEY
    });

    const request = mailjet
    .post("send", {'version': 'v3.1'})
    .request({
      "Messages":[
        {
          "From": {
            "Email": body.from
          },
          "To": [
            {
              "Email": body.to
            }
          ],
          "Subject": "Greetings from Mailjet.",
          "TextPart": "My first Mailjet email",
          "HTMLPart": `<h3>${body.message}</h3><br />May the delivery force be with you!`,
          "CustomID": "AppGettingStartedTest"
        }
      ]
    })
     return request
}