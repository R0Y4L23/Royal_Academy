import React from 'react'
import { BookOutlined, SearchOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import CourseCard from '../components/courseCard'

const Home = () => {
    const router = useRouter()
    const logout = () => {
        //localStorage.removeItem('token')
        router.push('/')
    }
    const [showAllCourse, setShowAllCourse] = React.useState(true)
    const courses = [{
        id: 1,
        name: 'ReactJS',
        description: 'ReactJS is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.',
    },
    {
        id: 2,
        name: 'NodeJS',
        description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive applications that run across distributed devices.',
    },
    {
        id: 3,
        name: 'AngularJS',
        description: 'AngularJS is a JavaScript framework for building web applications and is maintained by Google.',
    },
    {
        id: 4,
        name: 'VueJS',
        description: 'Vue.js is a JavaScript framework for building user interfaces. It is maintained by Evan You and a community of individual developers and companies.',
    },
    {
        id: 5,
        name: 'React Native',
        description: 'React Native is a framework for building native apps using React.',
    },
    {
        id: 6,
        name: 'Flutter',
        description: 'Flutter is a mobile application framework for building native apps on Android, iOS, and other platforms.',
    }
    ]

    const coursesStarted = [{
        id: 1,
        name: 'ReactJS',
        description: 'ReactJS is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.',
    },
    {
        id: 2,
        name: 'NodeJS',
        description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive applications that run across distributed devices.',
    },
    {
        id: 3,
        name: 'AngularJS',
        description: 'AngularJS is a JavaScript framework for building web applications and is maintained by Google.',
    }]


    return (
        <>
            <div className="flex md:flex-row flex-col md:items-start items-center justify-center xl:gap-[500px] sm:gap-[100px] gap-[20px] m-5">
                <div className='text-2xl xs:hidden flex items-center'><BookOutlined style={{ color: "green" }} /><span className='text-blue-500'>Royal</span> <span className='text-green-500'>Academy</span></div>
                <div className="flex gap-10 items-center">
                    <div className='text-2xl xs:flex hidden items-center'><BookOutlined style={{ color: "green" }} /><span className='text-blue-500'>Royal</span> <span className='text-green-500'>Academy</span></div>
                    <div onClick={() => { setShowAllCourse(true) }} className='uppercase xs:text-lg font-semibold hover:text-gray-400 cursor-pointer'>All Courses</div>
                    <div onClick={() => { setShowAllCourse(false) }} className='uppercase xs:text-lg font-semibold hover:text-gray-400 cursor-pointer'>Enrolled Courses</div>
                </div>
                <div className="flex gap-10 text-2xl items-center">
                    <SearchOutlined />
                    <div onClick={logout}
                        className='bg-blue-500 px-5 text-lg font-semibold rounded-md py-2 border-2 hover:border-blue-500 hover:bg-white hover:text-blue-500 cursor-pointer uppercase text-white'>Logout</div>
                </div>
            </div>
            <p className='text-5xl text-center mt-16'>{showAllCourse ? 'All Courses' : "Enrolled Courses"}</p>
            <div className='flex justify-center items-center w-2/3 mx-auto rounded-lg mt-28 mb-32'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20'>
                    {showAllCourse && courses.map(course => {
                        return <CourseCard key={course.id} name={course.name} description={course.description} />
                    })
                    }
                    {!showAllCourse && coursesStarted.map(course => {
                        return <CourseCard key={course.id} started name={course.name} description={course.description} />
                    })
                    }
                </div>
            </div>



        </>
    )
}

export default Home