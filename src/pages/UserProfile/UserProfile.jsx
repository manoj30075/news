import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './UserProfile.css';

function UserProfile() {
    return (
        <div className="user-profile">
            <Navbar />
            <form className="profile-form">
                <label>
                    Favorite Categories:
                    <input type="text" name="categories" />
                </label>
                <button type="submit">Save Preferences</button>
            </form>
        </div>
    );
}

export default UserProfile;
