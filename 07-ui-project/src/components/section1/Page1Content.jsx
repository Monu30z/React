import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

function Page1Content() {
  return (
    <div className='py-10 px-18 h-[90vh] flex items-center gap-10 '>
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default Page1Content