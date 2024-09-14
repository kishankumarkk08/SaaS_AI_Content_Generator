"use client"
import React, { useState, useContext } from 'react'
import FormSection from '../(components)/FormSection'
import Output from '../(components)/Output'
import { TEMPLATE } from '../../(components)/TemplateSection'
import Templates from '@/app/(templates)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AIModal'
import { useUser } from '@clerk/nextjs'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'
import { UserSubsContext } from '@/app/(context)/UserSubsContext'



interface SLUGPROPS {
  params: {
    'slug': string
  }
}

const ContentPage = (props: SLUGPROPS) => {


  const [loading, setLoading] = useState<boolean>(false)
  const [result, setResult] = useState<string>();
  const { user } = useUser()
  const router = useRouter();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext)
  const { userSubscription, setUserSubscription } = useContext(UserSubsContext)

  const generateContent = async (formData: any) => {
    if (totalUsage >= 10000 && !userSubscription) {
      router.push('/dashboard/billing')
      return;
    }
    setLoading(true)
    const selectedPrompt = selectedTemplate?.aiPrompt
    const finalPrompt = JSON.stringify(formData) + "," + selectedPrompt
    const result = await chatSession.sendMessage(finalPrompt)
    const aiResponse = await result.response.text()
    // console.log(result.response.text())
    setResult(result.response.text())
    saveInDb(JSON.stringify(formData), selectedTemplate?.slug, aiResponse)
    setLoading(false)


  }
  const saveInDb = async (formData: any, slug: any, aiResponse: string) => {
    const result = await db.insert(AIOutput).values({
      formData: formData || '',
      templateSlug: slug || '',
      aiResponse: aiResponse || '',
      createdBy: user?.primaryEmailAddress?.emailAddress || '',
      createdAt: moment().format('DD/MM/YYYY')
    })
    console.log(result)
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