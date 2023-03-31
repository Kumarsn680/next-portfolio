import React from 'react'

const achivementlist = [
  "Under 1000 rank, TCS Codevita",
  "1833 Max Rating, Codechef",
  "280 Questions Solved , GFG",
  "218 Problems Solved, Leetcode",
];

const Achievements = () => {
  return (
    <>
    <h1 className='text-white mx-10 my-5 text-5xl font-semibold'>Achievements</h1>
    <div id="achievements">
        {
            achivementlist.map((item)=>(<span key={item} className='text-xl text-yellow-300 font-semibold block my-2 mx-10'>{item}</span>))
        }
    </div>
    </>
  )
}

export default Achievements