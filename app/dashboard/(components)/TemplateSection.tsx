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

  const [templateList, setTemplateList] = useState<TEMPLATE[]>(Templates)
  const [noResults, setNoResults] = useState<boolean>(false)

  useEffect(() => {
    if (searchInput) {
      const filterData = Templates.filter(item =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );

      if (filterData.length > 0) {
        setTemplateList(filterData);
        setNoResults(false);
      } else {
        setTemplateList([]);
        setNoResults(true);
      }

    } else {
      setTemplateList(Templates);
      setNoResults(false);
    }
  }, [searchInput]);

  return (
    <div className='p-10'>
      {noResults ? (
        <div className='text-black text-center flex justify-center items-center font-semibold mt-[15%]'>No results found</div>
      ) : (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {templateList.map((item: TEMPLATE, index: number) => (
            <TemplateCard key={index} {...item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default TemplateSection;