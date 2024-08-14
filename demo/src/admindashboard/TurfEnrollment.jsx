import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TurfEnroll = () => {
  const [turfs, setTurfs] = useState([]);
  const navigate = useNavigate(); // Correct useNavigate hook
  const apiBaseUrl = 'http://localhost:8080/turf'; // Adjust if needed

  useEffect(() => {
    fetch(`${apiBaseUrl}/fetch`)
      .then(response => response.json())
      .then(data => setTurfs(data))
      .catch(error => console.error('Error fetching turfs:', error));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this turf?')) {
      fetch(`${apiBaseUrl}/delete/${id}`, {
        method: 'DELETE'
      })
        .then(response => {
          if (response.ok) {
            setTurfs(turfs.filter(turf => turf.id !== id));
            alert('Turf deleted successfully');
          } else {
            throw new Error('Error deleting turf');
          }
        })
        .catch(error => {
          console.error('Error deleting turf:', error);
          alert('Failed to delete turf');
        });
    }
  };

  return (
    <Container className="mt-5 mb-5 p-4" style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h4" className="mb-3 font-weight-bold text-primary text-center" style={{ letterSpacing: '1px' }}>
        Turf List
      </Typography>
      <TableContainer component={Paper} className="shadow-sm" style={{ borderRadius: '8px', overflow: 'hidden' }}>
        <Table>
          <TableHead>
            <TableRow className="bg-primary text-white">
              <TableCell className="font-weight-bold">ID</TableCell>
              <TableCell className="font-weight-bold">Turf Name</TableCell>
              <TableCell className="font-weight-bold">Address</TableCell>
              <TableCell className="font-weight-bold">Price</TableCell>
              <TableCell className="font-weight-bold">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {turfs.map(turf => (
              <TableRow key={turf.id}>
                <TableCell>{turf.id}</TableCell>
                <TableCell>{turf.turf_name}</TableCell>
                <TableCell>{turf.turf_address}</TableCell>
                <TableCell>{turf.turf_price}</TableCell>
                <TableCell>
                  <div className="d-flex">
                    {/* <Button 
                      variant="outlined" 
                      color="primary" 
                      size="small" 
                      style={{ 
                        fontSize: '0.75rem', 
                        padding: '4px 8px', 
                        marginRight: '8px' 
                      }}
                    >
                      <FaEdit style={{ marginRight: '4px' }} /> Edit
                    </Button> */}
                    <Button 
                      variant="outlined" 
                      color="secondary" 
                      size="small" 
                      style={{ 
                        fontSize: '0.75rem', 
                        padding: '5px 1px' 
                      }}
                      onClick={() => handleDelete(turf.id)} // Bind delete handler
                    >
                      <FaTrashAlt style={{ marginRight: '4px' }} /> Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TurfEnroll;
