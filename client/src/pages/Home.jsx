import React,{ useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import {Spinner} from 'flowbite-react';
import SeekerCartPost from '../components/Seeker.cartPost';


export default function Home() {

    const [loading,setLoading] = useState(false);
    const [showMore,setShowMore] = useState(false);
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        const fetchPosts = async () => {
            setLoading(true);
            setShowMore(false);
            const res = await fetch(`/api/post/get-posts`);
            const data = await res.json();
            if(data.length > 8){
                setShowMore(true);
            }
            else{
                setShowMore(false);
            }
                setPosts(data);
                setLoading(false);
        };
        fetchPosts();
    },[posts._id])

  
  return (
    <div className="min-h-screen  ">
      <div className="flex justify-end p-4 ">
        <form className="mr-3 hidden lg:inline-block">
          <TextInput
            type="text"
            placeholder="Search Jobs..."
            rightIcon={AiOutlineSearch}
            className="mr-4 w-96"
          />
        </form>
        <Button className="w-12 h-12 lg:hidden focus:outline-none" color="gray" pill>
          <AiOutlineSearch />
        </Button>
        <Button className="flex flex-col items-center mx-4">
          <TbFilterBolt />
          <span>Filter</span>
        </Button>
        <Button className="mx-4">Find Job</Button>
      </div>
      {
        posts && posts.length > 0 && (
          <div className="p-4">
        <div className="flex flex-wrap gap-4 ml-40">
        {posts.map((post)=>(
          <SeekerCartPost key={post._id} post={post} showApply={true}/>
        ))}
        </div>
      </div>
        )
      }
      
    
    <div>
      <img src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/06/30125154/How-to-Get-a-Job-Where-You-Used-to-Work.jpg" alt="home page photo" 
      className=''/>
    </div>

    <div className=''>
          <h1 className='text-3xl font-bold text-slate-700 p-4'>Listing result:</h1>
          <div className='p-7 flex flex-wrap gap-4'>
              {!loading && posts.length === 0 && (
                      <p className='text-lg text-center text-slate-700'>No result found..!</p>
                  )
              }
              {
                  loading && ( 
                     <Spinner size='xl'/>
                  )
              }

            </div>
          <div className='text-center mb-4'>
          {showMore && (
              <button onClick={onShowMoreClick} className='text-green-600 hover:underline'> Show More</button>
          )}
          </div>
      </div>
  </div>
  )
}
