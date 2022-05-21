import React, {useState}  from 'react'
import './contact.css'


const Contact = () => {
  
    
    

    const [msg, setMsg] = useState({
        name : "",
        email : "",
        message : ""
    });

   // Handle Inputs
   const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setMsg({...msg, [name]:value});
    }




    //Handle Submit
    const handleSubmit = async (event)=>{
        event.preventDefault();

        //Object DeStructuring
        //Store Object Data into Variables
        const {name, email, message} = msg;
        try {
            //It is Submitted on port 3000 by default
            // Which iFront End but we need to
           // Submit it on Backend which is on 
           // Port 3001. so we need Proxy

            const res = await fetch('/message', {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    name, email, message
                })
            })
            console.log(res.status)
            if(res.status === 400 || !res){
                window.alert("Message Not Sent. Try Again Later")
            } else{

                // You need to Restart the Server for Proxy Works
                // Now try Again
                window.alert("Message Sent");
                
                setMsg({
                    name : "",
                    email : "",
                    message : ""

                })

            }
        } catch (error) {
           console.log(error);
        }
    }







    return (
        <div>
          <div className=' styless'>
            <section id="contact ">
                <div className="container my-5 py-5   ">
                    <div className="row mb-5">
                        <div className='col-12'>
                            <h3 className="fs-5 text-center mb-0   text">Contect Us</h3>
                            <h1 className='display-6 text-center mb-4  text '>Have Some Question</h1>
                            <hr className='w-25 mx-auto' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6'>
                        {/*    <img src="/images/images1.jpg" alt="Contact" className='w-75' />        */}

                        <img src="Images/Contact2.jpg"    alt=""  className='img  '  />
                           

                        </div>


                        <div className='col-md-6'>
                
                     
                               
                        <form  onSubmit={handleSubmit} method="POST" >             
                        
                                <div className="mb-3">
                                    <label for="name" className="form-label  text"> Your Name </label>
                                    <input type="text" className="form-control" id="name" placeholder="Rohit Singh" 


                                   name='name'                                                
                                    value={msg.name}                     
                                    onChange={handleChange}

                                    />
                                </div>

                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label  text">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                                    
                                    
                                    name='email'
                                    value={msg.email}                     
                                    onChange={handleChange}

                                    
                                     />
                                </div>

                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label   text">Your Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
                                    

                                    name='message'
                                    value={msg.message}                     
                                    onChange={handleChange}

                                    
                                    ></textarea>
                                </div>

                           
                             <button type='submit' className='btn btn-outline-primary rounded-pill px-4    text'>Send Message <i className="fa fa-paper-plane ms-2"></i></button>


                            </form>
                        </div>
                    </div>
                </div>
            </section>
          
          </div>
        </div>
    )
}


export default Contact;