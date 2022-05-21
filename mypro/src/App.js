

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Protectedroute from './components/Protectedroute'; 
import { useEffect, useState } from 'react';

import Aptitude from './components/Aptitude/Aptitude';
import ITjob from './components/ITJOB/ITjob';
import Ssb from './components/SSB/Ssb';
import Govjob from './components/Govjov/Govjob';
import Iasnotes from './components/IASnotes/Iasnotes';

import Cat from './components/Cat/Cat';

import Routes from './Routes';






 { /*
import Syllabus from './components/Syllabus/Syllabus';
import Notes from './components/Notesias/Notes';
import Upsc from  './components/Upsctoppers/Topers';
import Books from './components/Books/Books';
import Aptitude from './components/Aptitude/Aptitude';
import English from './components/English/English';


*/}





function App() {




  //  Check if User is Logged in
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);




  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

       if(res.status === 200) {
         setauth(true)
         setauth1(false)
       }
       
       if(res.status === 401) {
        setauth(false)
        setauth1(true)
      }


    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);






  return (
    <div  >
      
    <Navbar    auth={ auth1 } />                
    <Switch>
    
      <Route    exact path="/" component={Home} />
      <Route      exact path="/about" component={About} />
      <Route   exact path="/services" component={Services} />
      <Route          exact path="/contact" component={Contact} />
     
   

      <Route exact path="/Aptitude" component={Aptitude} />
      <Route exact path="/ITjob" component={ITjob} />
      <Route exact path="/Ssb" component={Ssb} />
      
      <Route exact path="/Iasnotes" component={Iasnotes} />
     
      <Route exact path="/Govjob" component={Govjob} />
      <Route exact path="/Cat" component={Cat} />

     
   {/*   <Route exact path="/login" component={Login} />       */}
 
      <Protectedroute exact path="/login" component={Login}  auth={auth1}  />        
   
   
   {/*      <Route exact path="/register" component={Register} />   */}
   
      <Protectedroute exact path="/register" component={Register}   auth={auth1}  />      
    

    {/*  <Route exact path="/logout" component={Logout} />        */}

      <Protectedroute exact path="/logout" component={Logout}  auth={auth} />  
           

       

    </Switch>
    <Footer />

    
  

    
    <Routes/>
    


{/*

    <Syllabus />
     <Notes/>    
     <Upsc/>
     <Books/>
    
    <Aptitude/>
    <English/>
      
  */}


    </div>
  );
}


export default App;





{/*



import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Protectedroute from './components/Protectedroute'; 
import { useEffect, useState } from 'react';


import Syllabus from './components/Syllabus/Syllabus';
import Notes from './components/Notesias/Notes';
import Upsc from  './components/Upsctoppers/Topers';
import Books from './components/Books/Books';
import Aptitude from './components/Aptitude/Aptitude';
import English from './components/English/English';


function App() {
  return (
    
 
     
     <div className="App">
      
      <Navbar   auth={ auth1 } />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
       
       
        <Protectedroute exact path="/login" component={Login}  auth={auth1}  />
     
        <Protectedroute exact path="/register" component={Register}  auth={auth1}   />   
  
        <Protectedroute exact path="/logout" component={Logout}  auth={auth} />   
  
         
  
      </Switch>
      <Footer/>


    </div>
  );
}



export default App;



*/}
