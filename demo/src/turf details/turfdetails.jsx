import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const tutors = [
    { id: 1, name: 'John Doe', subject: 'Mathematics', fee: '$40/hr', image: 'https://via.placeholder.com/150?text=John+Doe' },
    { id: 2, name: 'Jane Smith', subject: 'Physics', fee: '$35/hr', image: 'https://via.placeholder.com/150?text=Jane+Smith' },
    { id: 3, name: 'Michael Brown', subject: 'Chemistry', fee: '$45/hr', image: 'https://via.placeholder.com/150?text=Michael+Brown' },
    { id: 4, name: 'Emily White', subject: 'Biology', fee: '$30/hr', image: 'https://via.placeholder.com/150?text=Emily+White' },
    { id: 5, name: 'David Green', subject: 'English Literature', fee: '$50/hr', image: 'https://via.placeholder.com/150?text=David+Green' },
];

const courses = [
    { id: 1, name: 'Mathematics', description: 'Learn about algebra, geometry, calculus, and more.' },
    { id: 2, name: 'Physics', description: 'Understand the principles of mechanics, electricity, magnetism, and modern physics.' },
    { id: 3, name: 'Chemistry', description: 'Explore the elements, compounds, reactions, and more.' },
    { id: 4, name: 'Biology', description: 'Study the science of life, including anatomy, physiology, and ecology.' },
    { id: 5, name: 'English Literature', description: 'Dive into classic and modern literature, poetry, and drama.' },
    { id: 6, name: 'History', description: 'Examine historical events, figures, and periods from around the world.' },
    { id: 7, name: 'Geography', description: 'Learn about physical and human geography, and the environment.' },
    { id: 8, name: 'Computer Science', description: 'Discover programming, algorithms, data structures, and more.' },
    { id: 9, name: 'Economics', description: 'Understand microeconomics, macroeconomics, and economic theory.' },
];

const CoursePage = () => {
    const { id } = useParams();
    const course = courses.find(course => course.id === parseInt(id));

    // Search state
    const [searchQuery, setSearchQuery] = useState('');

    // Filter tutors based on search query
    const filteredTutors = tutors.filter(tutor =>
        tutor.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Container sx={{ mt: 12, mb: 8 }}>
            <Typography variant="h2" gutterBottom>{course.name}</Typography>
            <Typography variant="h5" gutterBottom>{course.description}</Typography>
            {/* <Button variant="contained" color="primary" sx={{ mb: 4 }}>
                Enroll Course
            </Button> */}
            <Typography variant="h4" gutterBottom>Available Tutors</Typography>
            <Grid container spacing={4}>
                {filteredTutors.map((tutor) => (
                    <Grid item xs={12} sm={6} md={4} key={tutor.id}>
                        <Card sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt={tutor.name}
                                height="140"
                                image={tutor.image}
                                title={tutor.name}
                            />
                            <CardContent>
                                <Typography variant="h6" gutterBottom>{tutor.name}</Typography>
                                <Typography variant="body2" color="textSecondary" gutterBottom>{tutor.subject}</Typography>
                                <Typography variant="body2" color="textSecondary" gutterBottom>{tutor.fee}</Typography>
                                <Button variant="contained" color="primary">
                                    Contact Tutor
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CoursePage;