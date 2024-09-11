

import Templates from '@/app/(templates)/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE {
  name: string,
  desc: string,
  icon: string,
  category: string,
  slug: string,
  aiPrompt: string,
  form?: FORM[]
}

export interface FORM {
  label: string,
  field: string,
  name: string,
  required?: boolean,

}

const TemplateSection = ({ searchInput }: any) => {

  const [templateList, setTemplateList] = useState(Templates)
  useEffect(() => {
    console.log(searchInput)
    if (searchInput) {
      const filterData = Templates.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()));
      setTemplateList(filterData)
    }
    else {
      setTemplateList(Templates)
    }
  }, [searchInput])

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
      {templateList.map((item: TEMPLATE, index: number) => (
        <TemplateCard key={index} {...item} />
      ))}
    </div>
  )
}

export default TemplateSection