import React from 'react'

const CourseCard = ({ name, description, started }) => {

    const cn = 'mt-8 bg-green-500 w-fit px-3 font-semibold rounded-md py-1 border-2 hover:border-green-500 hover:bg-white hover:text-green-500 cursor-pointer uppercase text-white'
    const cn2 = 'mt-8 bg-blue-500 w-fit px-3 font-semibold rounded-md py-1 border-2 hover:border-blue-500 hover:bg-white hover:text-blue-500 cursor-pointer uppercase text-white'


    return (
        <div className='bg-gray-100 p-5 flex flex-col justify-around xs:items-start items-center xs:text-left text-center rounded-lg'>
            <p className='font-bold text-2xl'>{name}</p>
            <p className='text-lg font-mono mt-5'>{description}</p>
            <div className={started ? cn2 : cn}>{started ? "Course Started" : "Start Course"}</div>
        </div>
    )
}

export default CourseCard