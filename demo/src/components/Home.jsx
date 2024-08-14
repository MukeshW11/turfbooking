import React from 'react';
import { useContext } from 'react';
import '../Styles/Home.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Categories from './Categories';
// import { Button } from 'react-bootstrap';
import videoFile from '../Images/v1.mp4'; // Correct the file extension and path
// import { Button } from 'react-bootstrap';
// import { colors } from '@mui/material';
// import Footer from '../components/Footer.jsx';
// import Categories from '../Components/Categories.jsx';
import { AuthContext } from './AuthContext'; // Ensure the correct import path


function Home() 
{
  const userId=useParams();
  const nav=useNavigate();
  const { isLoggedIn } = useContext(AuthContext); // Use AuthContext
  const handleClick=(e)=>{
    e.preventDefault();

    if(isLoggedIn)
    {
      nav('/categories');
    }
    else{
      nav('/login');
    }
  }
  return (
    <div>
      
      <div className="video-container">
        <video autoPlay loop muted width="1550" height="max">
          <source src={videoFile} type='video/mp4' />
        </video>
        <div className="video-text">
          <h1>Explore and Book Sports Facilities Near You</h1>
          <p>Book your turf easily and quickly</p>
          <br></br>
          

          <button class="btn-31" onClick={handleClick}>
            <span class="text-container">
              <span class="text">Booknow</span>
            </span>
          </button>
          
          </div>
      </div>
          
          {/* <Link to={`/football`}>
            <button className="my-button">
                Football  
            </button>
        </Link> */}
      {/* <br></br> */}
      {/* <br></br> */}
      {/* <Categories/> */}
     
    
      
    </div>
    //   {/* <Categories /> */}
    //   {/* <Footer />
    //    */}
    

  );
}

export default Home;