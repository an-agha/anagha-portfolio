'use client'

import React from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form
} from "@/components/ui/form"

import BaseInput from '@/components/ui/formfields/input';
import BaseTextarea from '@/components/ui/formfields/textArea';
import PrimaryButton from '@/components/core/button/Primary'

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

function FormX() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
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
          <PrimaryButton 
          content='Submit' />
        </div>
      </form>
    </Form>
  )
}

export default FormX