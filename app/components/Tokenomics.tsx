import React from 'react'

const Tokenomics = () => {
  return (
    <>
        <h2 className='text-center text-white text-5xl lg:text-[7rem]'>Tokenomics</h2>
        <div className="h-[2px] w-[30%] bg-white mx-auto"></div>
        <h3 className='text-4xl text-white text-center my-10'>1,000,000,000 token supply</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:my-10">
            <div className='flex flex-col bg-[#3B94FF] px-6 py-10 rounded-xl justify-center items-center'>
                <h3 className='text-6xl text-black'>1%</h3>
                <p className='text-white text-2xl lg:text-3xl'>Taxes</p>
            </div>
            <div className='flex flex-col bg-[#3B94FF] px-6 py-10 rounded-xl justify-center items-center'>
                <h3 className='text-6xl text-black'>LP</h3>
                <p className='text-white text-2xl lg:text-3xl'>Locked</p>
            </div>
            <div className='flex flex-col bg-[#3B94FF] px-6 py-10 rounded-xl justify-center items-center'>
                <h3 className='text-6xl text-black'>Contract</h3>
                <p className='text-white text-2xl lg:text-3xl'>Verified & Renounced </p>
            </div>
        </div>
        </>
  )
}

export default Tokenomics