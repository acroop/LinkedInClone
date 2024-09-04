import Image from 'next/image'
import React from 'react'

const headLines = [
  {
    "head": "Total life insurance policies grow by 9.6% YoY to 24.9 lakh in July 2024",
    "subHead": "Banking and Finance Sector"
  },
  {
    "head": "Total number of passengers carried by airlines  rises 6.9% YoY in July 2024",
    "subHead": "Transportation Sector"
  },
  {
    "head": "Telecom sector's wireless subscribers rise 13 lakh MoM in June 2024",
    "subHead": "Telecom Services"
  },
]

const jobs = [
  {
    "title": "Artificial Intelligence and Machine Learning (AI/ML) Specialists",
    "companies": "Google, Microsoft, Amazon, Meta.",
    "skills": "AI, machine learning, data science, natural language processing."
  },
  {
    "title": "Cybersecurity Experts",
    "companies": "Palo Alto Networks, IBM, Deloitte",
    "skills": "Cybersecurity, ethical hacking, cloud security, security analysis."
  },
  {
    "title": "Cloud Computing Professionals",
    "companies": "Amazon Web Services (AWS), Microsoft (Azure), Google Cloud",
    "skills": "Multicloud proficiency, cloud architecture, Kubernetes, AWS, Azure, GCP."
  },
]

function RightFeed() {
  return (
    <div className=' w-full h-full'>
      <div className=' border-b-4'>
      <div className=' p-7 text-2xl font-bold pb-1 flex'>Top Trending Jobs
      <span>&#xa0;</span>
        <img src="/jobs.svg" alt="jobs" className=' w-9 '/>
      </div>
      <div className=' pt-0 p-8 text-gray-500 pb-3'>Where you can get hired</div>
      {
        jobs.map((job, index) => (
          <div key={index} className='text-sm pt-0 p-8 text-gray-500 pb-3 hover:bg-[#ecebeb] cursor-pointer'>
            <div className='font-bold text-sm'>{job.title}</div>
            <div className='text-gray-500'>
              <span className='font-semibold'>Actively Recruiting in:</span>
              {' '}
              {job.companies.split(',').map((company, i) => (
                <span key={i}>
                  <span>&#8226; </span>
                  {company.trim()}
                  {i < job.companies.split(',').length - 1 && ' '}
                </span>
              ))}
              <br />
              <span>Skills: {job.skills}</span>
            </div>
          </div>
        ))
      }
      <div className='p-7 font-bold pb-2 pt-0 hover:underline cursor-pointer hover:text-blue-400'> Missing any skils? Learn from us <span className=' '> &#8594;</span></div>
      </div>

      
      
      <div className=' p-7 text-2xl font-bold pb-2 pt-4'>Latest News</div>
      <div className=' pt-0 p-8 text-gray-500 pb-3'>Top Stories</div>
      <div className=''>
        {
          headLines.map((item, index) => (
            <div key={index} className=' text-sm pt-0 p-8 text-gray-500 pb-3 hover:bg-[#ecebeb] cursor-pointer'>
              <div className='font-bold text-sm'>{item.head}</div>
              <div className='text-gray-500'>{item.subHead}</div>
            </div>
          ))
        }
      </div>


    </div>
  )
}

export default RightFeed
