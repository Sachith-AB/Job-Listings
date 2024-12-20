import React, { useEffect, useState } from "react";
import JobPostCard from "../components/JobPostCard";

export default function Landing() {

  const [first,setFirst] = useState([]);
  const [fJob,setFJob] = useState(0);
  const [posts,setPosts] = useState([]);

  useEffect(()=>{

    const fetchPosts = async () => {
        
        
        const res = await fetch(`/api/post/get-posts`);
        const data = await res.json();
        
        
        if(res.ok){
            
            setPosts(data.posts);
            
            const full = data.posts.filter(post => post.type == 'full');
            const fJob = full.length;
            setFJob(fJob);
            
            // Sort by 'createdAt' (assuming 'createdAt' is a date string)
            const sortedFull = full.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

            // Get the first 3 most recent posts
            const recentFullPosts = sortedFull.slice(0, 6);
            setFirst(recentFullPosts)
            
        }
        if(!res.ok){
          console.log(data.message);
          setLoading(false);
        }
    };
    fetchPosts();
},[posts._id])

  return (
    <div>
      <div 
        className='py-28 px-20 text-center'
        style={{
            backgroundImage: `url('https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/light-blue-background_GkNvxFHd_SB_PM.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='text-3xl lg:text-5xl items-center'>
          <p>
            <span 
              className='text-3xl lg:text-5xl text-slate-500 font-bold animate-fadeInOut' 
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
            >
                Welcome to Joblistings
            </span>
            <br/><br/>
            <span 
              className='bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 bg-clip-text text-transparent font-bold animate-fadeInOutDelay'
            >
                Your Gateway to a Fulfilling Career
            </span>
          </p>
        </div>
        <p className='text-gray-600 mt-4 items-center mb-3'>
        Join a community where job seekers and employers come together to build successful careers. <br/>With our expert support and cutting-edge technology, finding the right job or the right hire has never been easier.
        </p>

        <a href="/sign-up" className="text-bold text-xl text-white mt-3 bg-blue-800 px-2 py-1 rounded-lg font-bold">REGISTER</a>
        
      </div>

      <div className='text-center py-20'>
        <h2 className='text-3xl font-bold text-slate-700 dark:text-white'>
          What You'll Find in Our <span className='text-teal-500 dark:text-blue-300'> Resource Center</span>
        </h2>
      </div>
      <div className="flex flex-wrap mx-auto justify-center gap-4 mt-3 mb-3 p-2">
      {
        first.map((post)=>(
          <JobPostCard post={post}/>
        ))
      }
      
    </div>
      

    </div>
  );
}
