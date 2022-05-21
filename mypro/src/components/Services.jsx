import React from 'react';
import './services.css';
//  import { Button } from 'react-bootstrap';
   import history from '../history';



const Services = () => {



    return (
        <div >


       <div id="cards_landscape_wrap-2">
        <div className="container  ">
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-4   box1">
                    <a href="">
                        <div className="card-flyer  ">
                            <div className="text-box img1">
                                <div className="image-box ">
                             {/*       <img src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="" />    */}
                                
                                    <img src="Images/Apti.jpg"    alt=""  />

                                </div>
                                <div className="text-container  Color">
                                    <h6 >Aptitude Prepration</h6>
                                    <p  > This Page will help you to give proper plan or tips how to prepare for Aptitude for any exam in easy way. Aptitude is very important to clear any exam </p>
                               
                                    <a  href=""  onClick={() => history.push('/Aptitude')}     className='btn btn-outline-primary rounded-pill px-4    btn1'>Go somewhere</a>
 
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-xs-12  col-sm-6 col-md-3 col-lg-4   box2 ">
                    <a href="">
                        <div className="card-flyer ">
                            <div className="text-box img1 ">
                                <div className="image-box ">
                            {/*        <img src="https://cdn.pixabay.com/photo/2018/04/09/19/55/low-poly-3305284_960_720.jpg" alt="" />    */}
                                
                                    <img src="Images/Gov.jpg"    alt=""  />
                                </div>
                                <div className="text-container   Color">                                    
                                    <h6>Goverment Job Prepration </h6>
                                    <p>This Page will help you to give proper plan or tips how to prepare for Government Job. How to crack government exam in easy way. Without coaching .  </p>


                                    <a  href=""  onClick={() => history.push('/Govjob')}     className='btn btn-outline-primary rounded-pill px-4    btn2'>Go somewhere</a>
 
                               
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-4   box3">
                    <a href="">
                        <div className="card-flyer ">
                            <div className="text-box img1">
                                <div className="image-box">
                             {/*       <img src="https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png" alt="" />     */}

                             <img src="Images/SSB2.jpg"    alt=""  />
                              
                                </div>

                                <div className="text-container    Color">
                                    <h6>SSB Prepration Tip</h6>
                                   <p> This Page will help you to give proper plan or tips how to prepare for 5 day SSB in easy way. How to crack SSB exam in easy way. Without coaching .  </p>
 
                                   <a  href=""  onClick={() => history.push('/Ssb')}     className='btn btn-outline-primary rounded-pill px-4    btn3'>Go somewhere</a>
 
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                </div>
                </div>   
              </div>




                <div id="cards_landscape_wrap-2">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-4   box1">
                    <a href="">
                        <div className="card-flyer  ">
                            <div className="text-box img1">
                                <div className="image-box">
                                {/*    <img src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="" />   */}

                                <img src="Images/IT3.jpg"    alt=""  />
                                 
                                
                                </div>
                                <div className="text-container    Color">
                                    <h6>IT Job Prepration</h6>
                                    <p>This Page will help you to give proper plan or tips how to prepare for IT Job in easy way. How to get a job in easy way Without paying any fees . .</p>

                                    <a  href=""  onClick={() => history.push('/ITjob')}     className='btn btn-outline-primary rounded-pill px-4    btn1'>Go somewhere</a>
 
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-xs-12  col-sm-6 col-md-3 col-lg-4   box2 ">
                    <a href="">
                        <div className="card-flyer ">
                            <div className="text-box img1">
                                <div className="image-box">
                               {/*     <img src="https://cdn.pixabay.com/photo/2018/04/09/19/55/low-poly-3305284_960_720.jpg" alt="" />   */}
                               
                               <img src="Images/IAS2.jpg"    alt=""  />

                                </div>
                                <div className="text-container   Color">                                    
                                    <h6>IAS Prepration</h6>
                                    <p>This Page will help you to give proper plan or tips how to prepare for IAS Exam in easy way. How to get selected in first attempt.Without coaching .</p>


                                    <a  href=""  onClick={() => history.push('/Iasnotes')}     className='btn btn-outline-primary rounded-pill px-4    btn2'>Go somewhere</a>
 
                               
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-4   box3">
                    <a href="">
                        <div className="card-flyer ">
                            <div className="text-box img1">
                                <div className="image-box">
                              {/*       <img src="https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png" alt="" />    */}
                              
                              <img src="Images/CAT2.png"    alt=""  />
                              
                                </div>

                                <div className="text-container    Color">
                                    <h6>CAT Exam Prepration</h6>
                                   <p>This Page will help you to give proper plan or tips how to prepare for CAT Exam in easy way. How to get selected in first attempt.Without coaching</p>
 
                                   <a  href=""  onClick={() => history.push('/Cat')}     className='btn btn-outline-primary rounded-pill px-4    btn3'>Go somewhere</a>
 
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                </div>
                </div>   










{/*
            <section id="service">
                <div className="container my-5 py-5">
                    <div className='row '>
                        <div className='col-12'>
                            <h3 className="fs-5 text-center mb-0">Out Services</h3>
                            <h1 className='display-6 text-center mb-4'>Our <b> Awesome</b> Services</h1>
                            <hr className='w-25 mx-auto' />
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className="col-md-4">

                            <div className="card p-3  border-secondary   bg-image hover-overlay hover-zoom hover-shadow ripple   " >

                                <img src="Images/aptibook3.jpg"  className='img1'  alt=""  />

                                <div className="card-body text-center">
                                {/*    <i className='fa fa-cogs fa-4x mb-4 text-primary'></i>     */}
{/*                                    <h5 className="card-title mb-3 fs-4 fw-bold">Highly Customizable</h5>
                                    <p className="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  
                                  
                                    <a  href=""  onClick={() => history.push('/Aptitude')}     className='btn btn-outline-primary rounded-pill px-4'>Go somewhere</a>

                                 
                                   

                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card p-3" >
                                <img src="images/img1.jpg" class="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <i className='fa fa-mobile fa-4x mb-4 text-primary'></i>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Full Responsive Layout</h5>
                                    <p className="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                     <a href=""  onClick={() => history.push('/Books')}     className='btn btn-outline-primary rounded-pill px-4'>Go somewhere</a>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card p-3" >
                                <img src="images/img1.jpg" class="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <i className='fa fa-users fa-4x mb-4 text-primary'></i>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">User Experience</h5>
                                    <p className="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                    <a href=""  onClick={() => history.push('/English')}     className='btn btn-outline-primary rounded-pill px-4'>Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className='row mt-5'>
                        <div className="col-md-4">
                            <div className="card p-3" >
                                <img src="images/img1.jpg" class="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <i className='fa fa-laptop fa-4x mb-4 text-primary'></i>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Goverment Job Prepration</h5>
                                    <p className="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                    
                               
                                    <a href=""   onClick={() => history.push('/Layout')}     className='btn btn-outline-primary rounded-pill px-4'>Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card p-3" >
                                <img src="images/img1.jpg" class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <i className='fa fa-file-code-o fa-4x mb-4 text-primary'></i>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Unique and Clean</h5>
                                    <p className="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>


                                    <a href=""  onClick={() => history.push('/Notes')}     className='btn btn-outline-primary rounded-pill px-4'>Go somewhere</a>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card p-3" >
                                <img src="images/img1.jpg" class="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <i className='fa fa-star-half-o fa-4x mb-4 text-primary'></i>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Creative Ideas</h5>
                                    <p className="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                
                                    <a href=""  onClick={() => history.push('/Syllabus')}     className='btn btn-outline-primary rounded-pill px-4'>Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </section>


    */}
          </div>
        </div>
    )
}


export default Services;










