import React from 'react'
import Cards from './Cards'
import {useState} from 'react'
import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
function Course() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getbook=async ()=>{
      try{
        const res=await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      }
      catch(error)
      {
        console.log(error);
      }
    };
    getbook();
  },[]);
  return (
    <>
  <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
<div className='pt-28 items-center justify-center text-center'>
  <h1 className='text-2xl  md:text-4xl'>We`re delighted tohave you <span className='text-pink-500'> Here! :)</span>
  </h1>
  <p className='mt-12'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odit veniam nesciunt ullam voluptatem doloremque voluptatibus dolorum rerum veritatis nihil illo cumque sit saepe facere ipsum voluptas velit temporibus, perferendis harum excepturi nostrum eum ducimus? Est adipisci laboriosam aliquid quisquam, tenetur non veritatis quia quod possimus, expedita voluptates iure necessitatibus?
  </p>
 <Link to="/">
 <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
 </Link>
  </div>
  <div>
  <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
  </div> 

 </div>
  </div>
    </>
  )
}

export default Course
