// // src/components/Categories.jsx
// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';
// import { Link } from 'react-router-dom';
// import c1Image from '../Images/c1.jpg';
// import c2Image from '../Images/c2.jpeg';
// import c3Image from '../Images/c3.jpg';
// import Navigation from '../Components/Navigation';
// import Footer from '../Components/Footer';
// const places = [
//   {
//     name: 'Badminton Court Chennai',
//     description: 'Pavans Badminton Academy , Badminton Academy, OMR, Near MKT Tower, Near Supreme Hospital, Padur, Chennai',
//     image: c1Image,
//     link: '/city', // Add link to the City page
//   },
//   {
//     name: 'Cricket Court Royalty Bangalore',
//     description: 'Evergreen Cricket , Cricket, Chellimman Koil Street, Mandhaveli Main Road, Madhavaram, Bangalore',
//     image: c2Image,
//     link: '/city', // Add link to the City page
//   },
//   {
//     name: 'Sky turf in the city Coimbatore',
//     description: 'Chettiar Thottam, Near Canara Bank, Badaga’s Colony, K. Vadamadurai, Coimbatore, Tamil Nadu',
//     image: c3Image,
//     link: '/city', // Add link to the City page
//   },
//   // Add more places as needed
// ];

// const Categories = () => {
//   return (
//     <Container sx={{ py: 8 }} maxWidth="md">
//       <Grid container spacing={4}>
//         {places.map((place, index) => (
//           <Grid item key={index} xs={12} sm={6} md={4}>
//             <Card sx={{ maxWidth: 345 }}>
//               <CardActionArea component={Link} to={place.link}>
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image={place.image}
//                   alt={place.name}
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     {place.name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {place.description}
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
   
//   );
// };

// export default Categories;


import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import c1Image from '../Images/badminton.jpg';
import c2Image from '../Images/cricket.jpg';
import c3Image from '../Images/football.jpg';
// import Footer from '../Components/Footer'; // Import Footer component

const places = [
  {
    name: 'Badminton Court Chennai',
    description: 'Pavans Badminton Academy , Badminton Academy, OMR, Near MKT Tower, Near Supreme Hospital, Padur, Chennai',
    image: c1Image,
    link: '../badminton', // Add link to the City page
  },
  {
    name: 'Cricket Court Royalty Bangalore',
    description: 'Evergreen Cricket , Cricket, Chellimman Koil Street, Mandhaveli Main Road, Madhavaram, Bangalore',
    image: c2Image,
    link: '../cricket', // Add link to the City page
  },
  {
    name: 'Football turf in the city Coimbatore',
    description: 'Chettiar Thottam, Near Canara Bank, Badaga’s Colony, K. Vadamadurai, Coimbatore, Tamil Nadu',
    image: c3Image,
    link: '../football/', // Add link to the City page
  },
  // Add more places as needed
];

const Categories = () => {
  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {places.map((place, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea component={Link} to={place.link}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={place.image}
                    alt={place.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {place.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {place.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Container>
    </>
  );
};

export default Categories;
