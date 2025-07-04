import dayjs from 'dayjs'
import React from 'react'

const JobCard = (props) => {
    // const skill = ["Javascript", "React", "Node.js"]

    // To get the difference in another unit of measurement, pass that measurement as the second argument
    // install dayjs to inilise the daya

    const date1 = dayjs(Date.now())
    const diffInDays = date1.diff(props.postedDn, 'day')
    return (
        <div className='mx-4 md:mx-20 lg:mx-40 mb-4 '>
            <div className='flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-zinc-200
             rounded-md border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103'>
                <div className=' flex flex-col items-start gap-3'>
                    <h1 className='text-lg font-semibold'>{props.title}-{props.company}</h1>
                    <p>{props.type}&#x2022; {props.experience} &#x2022; {props.location}</p>

                    {/* skill section */}
                    <div className='flex items-center gap-2'>
                        {props.skills.map((skill,idx) => (
                            <p className='text-gray-500 py-1 px-2 rounded-md border border-black' key={idx}>{skill}</p>
                        ))}
                    </div>
                </div>

                {/* differnce date */}
                <div className='flex items-center gap-4'>

                    <p className='text-gray-700'>Posted {diffInDays >1? `${diffInDays} days`:`${diffInDays} day`} ago</p>
                    <a href={props.job_link}>
                        <button className='text-blue-500 border border-blue-500 px-10 py-2 rounded-md'>Apply</button>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default JobCard
