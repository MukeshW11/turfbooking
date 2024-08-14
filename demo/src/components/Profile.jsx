import React, { useContext, useEffect, useState } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBInput
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { UserContext } from './UserContext'; // Import UserContext
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { userId } = useContext(UserContext); // Get userId from UserContext
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phn_no: '' });

  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:8080/users/${userId}`)
        .then(response => {
          setUserData(response.data);
          setFormData({ name: response.data.name, email: response.data.email, phn_no: response.data.phn_no });
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [userId]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/update/${userId}`, formData)
      .then(response => {
        setUserData(response.data);
        setIsEditing(false);
      })
      .catch(error => {
        console.error('Error updating user data:', error);
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a onClick={handleClick}>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid
                />
                <p className="text-muted mb-1">User</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn onClick={handleEditClick}>Edit</MDBBtn>
                  <MDBBtn outline className="ms-1">My Bookings</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                {isEditing ? (
                  <form onSubmit={handleFormSubmit}>
                    <MDBRow className="mb-3">
                      <MDBCol sm="3">
                        <MDBCardText>Full Name</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBInput
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow className="mb-3">
                      <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBInput
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow className="mb-3">
                      <MDBCol sm="3">
                        <MDBCardText>Phone</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBInput
                          type="text"
                          name="phn_no"
                          value={formData.phn_no}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBBtn type="submit">Save Changes</MDBBtn>
                    <MDBBtn outline className="ms-1" onClick={() => setIsEditing(false)}>Cancel</MDBBtn>
                  </form>
                ) : (
                  <>
                    <MDBRow className="mb-3">
                      <MDBCol sm="3">
                        <MDBCardText>Full Name</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{userData.name}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow className="mb-3">
                      <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{userData.email}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow className="mb-3">
                      <MDBCol sm="3">
                        <MDBCardText>Phone</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{userData.phn_no}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <br/>
        <br/>
        <br/>
        <br/>
      </MDBContainer>
    </section>
  );
};

export default ProfilePage;
