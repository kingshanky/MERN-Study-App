import React from 'react'
import './home.css'

import { NavLink } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Services from './Services';


 const Home = () => {
  return (
    <div>

            <section id="home">
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-md-8 mt-5'>
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white   Style11">Clear Any Exam</h1>
                            <p className="lead text-center fs-4 mb-5 text-white   Style11"> Hello my friend if you are searching for a website which will help you to guide how to crack any exam. Free of cost. Hear i am give you proper plan or strategy how to start preparation from Scratch.</p>

                            <div className='buttons d-flex justify-content-center'>
                                <NavLink  to="/contact"  className='btn btn-outline-light  me-4 rounded-pill px-4 py-2'>Get Quote</NavLink>
                                <NavLink  to="/services" className='btn btn-outline-light rounded-pill px-4 py-2'>Our Services</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <About/>
            <Services/>
            <Contact/>
            
        

    </div>
  )
}


export default Home;