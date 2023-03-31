import React from 'react'

const listoftech = [
  "C++",
  "Python",
  "Java",
  "Javascript",
  'React.js',
  'MySQL',
  'Git',
];

const Technologies = () => {
  return (
    <>
      <h1 className="text-white mx-10 my-10 text-5xl font-semibold">Technologies</h1>
      <div id="technologies" className="flex justify-evenly text-white flex-wrap">
        {listoftech.map((tech) => (
          <span className='text-xl px-4 py-2 bg-slate-50 text-lime-950 rounded-xl mx-3 my-2'>{tech}</span>
        ))}
      </div>
    </>
  );
}

export default Technologies