"use client"
import React, { useState } from 'react'
import SearchSection from './(components)/SearchSection'
import TemplateSection from './(components)/TemplateSection'


function Dashboard() {
  const [searchInput, setSearchInput] = useState<string>();
  return (
    <div>
      <SearchSection onSearchInput={(value: string) => setSearchInput(value)} />
      <TemplateSection searchInput={searchInput} />
    </div>
  )
}

export default Dashboard