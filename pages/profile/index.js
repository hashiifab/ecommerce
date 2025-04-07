import React from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';

const ProfilePage = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  if (!isLoaded || !isSignedIn) {
    return (
      <div className="loading-container">
        <p>Loading or not signed in...</p>
        <button 
          onClick={() => router.push('/sign-in')}
          className="sign-in-button"
        >
          Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src={user.imageUrl} alt="Profile" />
        </div>
        <div className="profile-info">
          <h1>{user.fullName}</h1>
          <p>{user.primaryEmailAddress?.emailAddress}</p>
        </div>
      </div>
      
      <div className="profile-content">
        <div className="profile-section">
          <h2>Account Information</h2>
          <div className="info-item">
            <span className="label">Name:</span>
            <span className="value">{user.fullName}</span>
          </div>
          <div className="info-item">
            <span className="label">Email:</span>
            <span className="value">{user.primaryEmailAddress?.emailAddress}</span>
          </div>
          <div className="info-item">
            <span className="label">Member since:</span>
            <span className="value">{new Date(user.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
        
        <div className="profile-section">
          <h2>Order History</h2>
          <p className="no-orders">No orders yet.</p>
          {/* Order history will be implemented in future updates */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;