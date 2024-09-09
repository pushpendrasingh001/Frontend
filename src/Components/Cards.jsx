import React from 'react'

function Cards({ item }) {
  return (
    <>
      <div className='mt-4 my-4 p-3 flex justify-evenly'>
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img 
              src={item.image || "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1714639053~exp=1714642653~hmac=27441614cdd2925cb879470cf015b0b72673efeca2d3533d4c1926956e5c3b95&w=740"} 
              alt="Card image" 
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline border-[2px]">${item.price}</div> 
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white hover:border-black px-2 py-1 cursor-pointer rounded-full border-[2px]">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards

