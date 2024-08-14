import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // For icons, if needed
import { useNavigate } from 'react-router-dom';

const StudentEnrollment = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  const apiBaseUrl = 'http://localhost:8080'; // Adjust if needed

  useEffect(() => {
    fetch(`${apiBaseUrl}/fetch`)
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      fetch(`${apiBaseUrl}/delete/${id}`, {
        method: 'DELETE'
      })
        .then(response => {
          if (response.ok) {
            setStudents(students.filter(student => student.id !== id));
            alert('Student deleted successfully');
          } else {
            throw new Error('Error deleting student');
          }
        })
        .catch(error => {
          console.error('Error deleting student:', error);
          alert('Failed to delete student');
        });
    }
  };

  return (
    <Container style={{ marginTop: '2rem', padding: '2rem' }}>
      <Typography variant="h4" style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>Users</Typography>
      <TableContainer component={Paper} style={{ maxWidth: '100%', overflowX: 'auto' }}>
        <Table style={{ minWidth: 650 }}>
          <TableHead>
            <TableRow style={{ backgroundColor: '#1266f1', color: '#1266f1' }}>
              <TableCell style={{ fontWeight: 'bold', color: '#ffffff' }}>ID</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: '#ffffff' }}>Firstname</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: '#ffffff' }}>Email</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: '#ffffff' }}>Phone No</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: '#ffffff' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map(student => (
              <TableRow key={student.id} style={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' } }}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.phn_no}</TableCell>
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
                      onClick={() => handleDelete(student.id)} // Bind delete handler
                    >
                      <FaTrashAlt style={{ marginRight: '10px' }} /> Delete
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

export default StudentEnrollment;
