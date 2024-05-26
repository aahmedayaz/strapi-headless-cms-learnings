import React, {useContext} from 'react'
import {Blog, Navbar} from '../components'
import BlogContext from '../contexts/BlogContext'

const Home = () => {
  const {blogs} = useContext(BlogContext)
  return (
    <div className='w-full'>
      <Navbar/>
      <div className='w-full flex mt-[10px]'>
        <div className='w-[20%] h-10  pl-16 mt-10'>
        </div>
        <div className='w-[80%] pr-8'>
          <div className='flex items-center justify-between px-4 w-full'>
            <div className='text-xs flex gap-6'>
              <button className='font-bold hover:cursor-auto'>Categories : </button>
              <button className='hover:underline ml-[10px]'>3D Metaverse</button>
              <button className='hover:underline'>Generative AI</button>
              <button className='hover:underline'>Deep Machine Learning</button>
              <button className='hover:underline'>Blockchain</button>
            </div>
            <div>
              <input 
                type='text' 
                placeholder='Search'
                className='border px-3 py-2 w-[300px] border-[#212121] rounded-sm focus:outline-none text-sm'
              />
            </div>


          </div>

          {/* Blogs */}
          <div className='w-full px-4 py-6 grid grid-cols-3 gap-5 mb-[150px]'>

            {
              blogs &&
              blogs.map((blog, index) => {
                return (
                  <Blog 
                    key={blog.id}
                    title={blog.attributes.title} 
                    author={blog.attributes.author} 
                    date={blog.attributes.date} 
                    category={blog.attributes.categories.data[0].attributes.categoryName} 
                    imgSrc={`http://localhost:1337${blog.attributes.thumbnail.data.attributes.url}`}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home