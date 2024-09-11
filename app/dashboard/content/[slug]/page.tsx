"use client"
import React, { useState } from 'react'
import FormSection from '../(components)/FormSection'
import Output from '../(components)/Output'
import { TEMPLATE } from '../../(components)/TemplateSection'
import Templates from '@/app/(templates)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AIModal'


interface SLUGPROPS {
  params: {
    'slug': string
  }
}

const ContentPage = (props: SLUGPROPS) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [result, setResult] = useState<string>();

  const generateContent = async (formData: any) => {
    setLoading(true)
    const selectedPrompt = selectedTemplate?.aiPrompt
    const finalPrompt = JSON.stringify(formData) + "," + selectedPrompt
    const result = await chatSession.sendMessage(finalPrompt)
    console.log(result.response.text())
    setResult(result.response.text())
    setLoading(false)
  }

  const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug == props.params.slug)

  return (
    <div className='p-5'>
      <Link href={'/dashboard'}>
        <Button><ArrowLeft></ArrowLeft></Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-5'>
        <FormSection selectedTemplate={selectedTemplate} userFormInput={(e: any) => generateContent(e)} loading={loading} />
        <div className='col-span-2'>
          <Output result={result} />
        </div>
      </div>
    </div>
  )
}

export default ContentPage