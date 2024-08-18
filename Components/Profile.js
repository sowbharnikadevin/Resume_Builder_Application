import React, { useEffect, useState } from 'react';
import './Profile.css';

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const email = localStorage.getItem('userEmail'); // Assuming you store the logged-in user's email in localStorage
        fetch(`http://localhost:5000/profile?email=${email}`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching profile:', error));
    }, []);

    return (
        <div className="profile-container">
            {user ? (
                <div className="profile-card">
                    <h1 className="profile-title">Profile</h1>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Password:</strong> {user.password}</p>
                    {/* Add more fields as needed */}
                </div>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
}

export default Profile;
