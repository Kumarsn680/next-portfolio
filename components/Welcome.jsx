import React from 'react'

const Welcome = () => {
  return (
    <div className="w-full bg-lime-950 p-10 ">
      <div className="w-full flex items-start flex-col md:w-4/5 lg:w-3/5 xl:2/5">
        <h1 className="text-5xl font-semibold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent my-2 lg:text-6xl">{`Welcome to My Personal Portfolio`}</h1>
        <p className="text-slate-300 my-2">{`I am an enthuastic developer`}</p>
        <button className="px-10 py-2 text-white font-medium bg-gradient-to-r from-red-500 rounded-2xl to-cyan-300 my-2">{`Learn More`}</button>
      </div>
    </div>
  );
}

export default Welcome