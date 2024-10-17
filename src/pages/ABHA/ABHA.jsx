import Lottie from 'lottie-react'
import React from 'react'
import groovyWalkAnimation from '../../assets/animations/coimgsoon'



const ABHA = () => {
  return (
    <>
    <div className='flex items-center justify-center h-[100vh]'>
    <Lottie animationData={groovyWalkAnimation} width={400} height={400} loop={true} />
    </div>
    </>
  )
}

export default ABHA