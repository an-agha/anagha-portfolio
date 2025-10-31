'use client'

import {
  Form
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";

import BaseInput from '@/components/ui/formfields/input';
import BaseTextarea from '@/components/ui/formfields/textArea';

const formSchema = z.object({
  fullname: z.string().min(2).max(50),
  email: z.email().min(2).max(50),
  phonenumber: z.string().min(10).max(12),
  description: z.string().min(2).max(150),
})

function FormX() {

  const [formMessage, setFormMessage] = useState<string>("")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phonenumber: "",
      description: "",
    },
  });

 async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.success) {
        setFormMessage("Message sent successfully!");
        form.reset();
      } else {
        setFormMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setFormMessage("Failed to send message. Please try again later.");
    }
  }

  return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className='w-full flex flex-col gap-4 bg-[rgb(29,40,57)] border border-borderDark rounded-lg p-4'>
          <h2 className='text-ld lg:text-xl text-accent/60 gap-4 font-geologica'>
            Contact Information
          </h2>
          <div className='w-full flex flex-col gap-6 items-baseline'>
            <BaseInput name="fullname" placeholder='Full Name *' />
            <BaseInput name="email" placeholder='Email Address' />
            <BaseInput name="phonenumber" placeholder='Phone Number' />
            <BaseTextarea name="description" placeholder='Description' />
          </div>
          <button type='submit'
        className={`text-accent/90 gap-2 border border-accent/60 px-4 py-2 rounded-lg font-geologica flex items-center justify-center glow-box hover:text-accent hover:bg-linear-to-r from-backgroundDark via-accent/30 to-backgroundDark`}
          >
            Submit
          </button>
        </div>
      </form>
    </Form>
    <div>
      <div>
        {formMessage}
      </div>
    </div>
    </>
  )
}

export default FormX