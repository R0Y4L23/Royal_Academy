import React from 'react'
import { BookOutlined, SearchOutlined } from '@ant-design/icons'
import scholar from "../assets/scholar.jpg"
import Image from 'next/image'
import DrawerComponent from '../components/drawer'

const Index = ({ windowWidth, windowHeight }) => {
  const [visible, setVisible] = React.useState(false)
  return (
    <>
      <DrawerComponent visible={visible} setVisible={setVisible} />
      <div className='home_back_1'>
        <div className="flex md:flex-row flex-col items-center justify-center xl:gap-[500px] md2:gap-[200px] gap-[50px] m-5">
          <div className='text-2xl xs:hidden flex items-center'><BookOutlined style={{ color: "green" }} /><span className='text-blue-500'>Royal</span> <span className='text-green-500'>Academy</span></div>
          <div className="flex gap-10 items-center">
            <div className='text-2xl  xs:flex hidden items-center'><BookOutlined style={{ color: "green" }} /><span className='text-blue-500'>Royal</span> <span className='text-green-500'>Academy</span></div>
            <div className='uppercase text-lg font-semibold hover:text-gray-400 cursor-pointer'>Courses</div>
            <div className='uppercase text-lg font-semibold hover:text-gray-400 cursor-pointer'>About</div>
            <div className='uppercase text-lg font-semibold hover:text-gray-400 cursor-pointer'>Contact</div>
          </div>
          <div className="flex gap-10 text-2xl items-center">
            <SearchOutlined />
            <div onClick={() => setVisible(true)}
              className='bg-blue-500 px-5 text-lg font-semibold rounded-md py-2 border-2 hover:border-blue-500 hover:bg-white hover:text-blue-500 cursor-pointer uppercase text-white'>Login</div>
          </div>
        </div>
        <div className=' flex flex-col justify-center items-center md2:mt-48 xs:mt-32 mt-20'>
          <p className='2xl:text-6xl text-3xl text-center'>Crack UPSC CSE - GS with India largest learning platform</p>
          <p className='2xl:text-3xl text-xl md2:mt-20 xs;mt-10 mt-3 text-gray-700 text-center'>Get Plus subscription and access unlimited live and recorded courses from India best educators</p>
          <div className='xs:mt-20 mt-5 bg-green-500 px-5 text-lg font-semibold rounded-md py-2 border-2 hover:border-green-500 hover:bg-white hover:text-green-500 cursor-pointer uppercase text-white'>Get Subscription</div>
        </div>
      </div>
      <div className='flex md:flex-row flex-col justify-center items-center xl:w-1/2 lg:w-2/3 w-4/5 mx-auto bg-orange-100 p-10 rounded-lg 3xl:-mt-20 md:-mt-24 mt-10'>
        <div className='flex flex-col   md:items-start items-center md:text-left text-center'>
          <p className='text-2xl'>Crack UPSC CSE - GS with India largest learning platform</p>
          <p className='text-lg 2xl:mt-10 mt-5 text-gray-700'>Get Plus subscription and access unlimited live and recorded courses from India best educators</p>
          <div className='2xl:mt-8 mt-2 bg-green-500 px-5 text-lg font-semibold rounded-md py-2 border-2 hover:border-green-500 hover:bg-white hover:text-green-500 cursor-pointer uppercase text-white'>Enroll Now</div>
        </div>
        <div className='2xl:m-5 md:m-3 mt-20'>
          <Image src={scholar} width={800} height={400} alt={"Image"} />
        </div>
      </div>
      <div className='flex xl:flex-row flex-col justify-center items-center w-2/3 mx-auto rounded-lg mt-40  gap-20'>
        <div className='flex flex-col xl:items-start items-center xl:text-left text-center'>
          <p className='text-2xl'>Crack UPSC CSE - GS with India largest learning platform</p>
          <p className='text-lg mt-10 text-gray-700'>Get Plus subscription and access unlimited live and recorded courses from India best educators</p>
          <div className='mt-8 bg-green-500 px-5 text-lg font-semibold rounded-md py-2 border-2 hover:border-green-500 hover:bg-white hover:text-green-500 cursor-pointer uppercase text-white'>Start Learning</div>
        </div>
        <div className='grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-5'>
          <div className='bg-gray-100 p-5 flex flex-col justify-around items-start rounded-lg'>
            <p className='font-bold text-2xl'>Machine Learning</p>
            <p className='text-lg font-mono mt-5'>Learn all the concepts of Machine Learning along with the practical examples.</p>
            <div className='mt-8 bg-green-500 w-fit px-3 font-semibold rounded-md py-1 border-2 hover:border-green-500 hover:bg-white hover:text-green-500 cursor-pointer uppercase text-white'>Start Course</div>
          </div>
          <div className='bg-gray-100 p-5 rounded-lg flex flex-col justify-around items-start'>
            <p className='font-bold text-2xl'>Deep Learning</p>
            <p className='text-lg font-mono mt-5'>Learn all the concepts of Deep Learning along with the practical examples.</p>
            <div className='mt-8 bg-green-500 w-fit px-3 font-semibold rounded-md py-1 border-2 hover:border-green-500 hover:bg-white hover:text-green-500 cursor-pointer uppercase text-white'>Start Course</div>
          </div>
          <div className='bg-gray-100 p-5 rounded-lg flex flex-col justify-around items-start'>
            <p className='font-bold text-2xl'>Artificial Intelligence</p>
            <p className='text-lg font-mono mt-5'>Learn all the concepts of Artificial Intelligence along with the practical examples.</p>
            <div className='mt-8 bg-green-500 w-fit px-3 font-semibold rounded-md py-1 border-2 hover:border-green-500 hover:bg-white hover:text-green-500 cursor-pointer uppercase text-white'>Start Course</div>
          </div>
          <div className='bg-gray-100 p-5 rounded-lg flex flex-col justify-around items-start'>
            <p className='font-bold text-2xl'>Data Science</p>
            <p className='text-lg font-mono mt-5'>Learn all the concepts of Data Science along with the practical examples.</p>
            <div className='mt-8 bg-green-500 w-fit px-3 font-semibold rounded-md py-1 border-2 hover:border-green-500 hover:bg-white hover:text-green-500 cursor-pointer uppercase text-white'>Start Course</div>
          </div>
          <div className='bg-gray-100 p-5 rounded-lg flex flex-col justify-around items-start'>
            <p className='font-bold text-2xl'>Computer Vision</p>
            <p className='text-lg font-mono mt-5'>Learn all the concepts of Computer Vision along with the practical examples.</p>
            <div className='mt-8 bg-green-500 w-fit px-3 font-semibold rounded-md py-1 border-2 hover:border-green-500 hover:bg-white hover:text-green-500 cursor-pointer uppercase text-white'>Start Course</div>
          </div>
          <div className='bg-gray-100 p-5 rounded-lg flex flex-col justify-around items-start'>
            <p className='font-bold text-2xl'>Natural Language Processing</p>
            <p className='text-lg font-mono mt-5'>Learn all the concepts of Natural Language Processing along with the practical examples.</p>
            <div className='mt-8 bg-green-500 w-fit px-3 font-semibold rounded-md py-1 border-2 hover:border-green-500 hover:bg-white hover:text-green-500 cursor-pointer uppercase text-white'>Start Course</div>
          </div>
        </div>
      </div>
      <footer className="text-gray-600 body-font bg-blue-100 mt-40">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <div className='text-2xl flex items-center'><BookOutlined style={{ color: "green" }} /><span className='text-blue-500'>Royal</span> <span className='text-green-500'>Academy</span></div>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-blue-300">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Royal Academy - All rights reserved.</p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Index