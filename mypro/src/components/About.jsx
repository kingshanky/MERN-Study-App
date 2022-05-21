import React from 'react'
import './About.css'


 const About = () => {
  return (
    <div>

     <section id="about">
         <div className='container my-5 py-5'>
            <div className='row'>
               <div className='col-md-6'>
                   <img src="/images/Study.jpg"  alt="About" className='img '></img>
               </div>
               
               <div className="Text   col-md-6">
                   <h3 className='fs-5 mb-0'>About Us</h3>
                   <h1 className='display-6 mb-2'>Who <b>We</b> Are</h1>
                   <hr className='w-50'/>
                   <p className="lead mb=4">Hello my friend if you are searching for a website which will help you to guide how to crack any exam. Free of cost. Hear i am give you proper plan or strategy how to start preparation from Scratch. So that you can easily get a job. </p>
               
{/*
                <button className='btn btn-primary rounded-pill px-4 py-2'>Get Started</button>
                <button className='btn btn-outline-primary rounded-pill px-4 py-2 ms-2'>Get Started</button>

*/}

               </div>

            </div>
         </div>
     </section>

    </div>
  )
}


export default About;