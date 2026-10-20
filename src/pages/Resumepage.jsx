import { Download } from 'lucide-react'
import React from 'react'
import { ImDownload2 } from 'react-icons/im'
import resume from '../assets/test-resume.webp'


const Image=()=>{
  return <>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="20" height="20">
  <path
    d="M 100 20
       C 111 20, 112 62, 125 75
       C 138 88, 180 89, 180 100
       C 180 111, 138 112, 125 125
       C 112 138, 111 180, 100 180
       C 89 180, 88 138, 75 125
       C 62 112, 20 111, 20 100
       C 20 89, 62 88, 75 75
       C 88 62, 89 20, 100 20 Z"
    fill="#0080EA"
  />
</svg>
  </>
}

const Resumepage = () => {
  return (
    <>
    <main className="resume-page-container">
      <header className='resume-heading-container'>
            <header>
              <Image/>
            <p>RESUME</p>
            </header>
            <h1>oh sure, let's keep it formal</h1>
            <p>For recruiters, hiring managers, and anyone who prefers </p>
            <p>the short version.</p>
            <main className='resume-heading-container-button'>
              <button><Download />Download</button>
              </main>
      </header>
      <main className='resume-container'>
            <img src={resume} alt="" />
      </main>
    </main>
    </>
  )
}

export default Resumepage