import MailSender from "@/Actions/MailSender";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import BodyMail from "@/models/bodtMail";

export default function Home() {
  const onsubmit = async (formData: FormData) => {
    'use server'
    console.log(formData.get('email'));

    let model: BodyMail = {
      to: formData.get('email'),
      message: formData.get('message'),
      from: process.env.Mail_FROM
    }
    MailSender(model)
      .then(() => {
        console.log("Send!")
      })
      .catch((err) => console.log(err)
      )

  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className="flex max-w-md flex-col gap-4" action={onsubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput id="email" name="email" type="email" placeholder="name@flowbite.com" required shadow />
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Your message" />
          </div>
          <Textarea id="comment" name="message" placeholder="Leave a comment..." required rows={4} />
        </div>
        <Button type="submit">Send mail</Button>
      </form>
    </main>
  );
}
