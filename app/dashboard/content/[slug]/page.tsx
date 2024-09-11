"use client"
import React from 'react'
import FormSection from '../(components)/FormSection'
import Output from '../(components)/Output'
import { TEMPLATE } from '../../(components)/TemplateSection'
import Templates from '@/app/(templates)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'


interface SLUGPROPS {
  params: {
    'slug': string
  }
}

const ContentPage = (props: SLUGPROPS) => {

  const generateAI = (formData: any) => {

  }

  const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug == props.params.slug)

  return (
    <div className='p-5'>
      <Link href={'/dashboard'}>
        <Button><ArrowLeft></ArrowLeft></Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-5'>
        <FormSection selectedTemplate={selectedTemplate} userFormInput={(e: any) => console.log(e)} />
        <div className='col-span-2'>
          <Output />
        </div>
      </div>
    </div>
  )
}

export default ContentPage