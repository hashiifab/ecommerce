import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineUser } from 'react-icons/ai'
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/router';

import { Cart, SearchBar } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const router = useRouter();

  return (
    <div className="navbar-container">
      <a href="/" className="logo">
        <h1 className="logo">
          <span>E-Commerce</span>
        </h1>
      </a>
      <SearchBar />
      <div className="auth-buttons">
        <SignedOut>
          <button className="auth-button sign-in" onClick={() => router.push('/sign-in')}>
            Sign In
          </button>
          <button className="auth-button sign-up" onClick={() => router.push('/sign-up')}>
            Sign Up
          </button>
        </SignedOut>
        <SignedIn>
          <div className="user-profile-section">
            <button 
              type="button" 
              className="profile-button" 
              onClick={() => router.push('/profile')}
            >
              <AiOutlineUser />
              <span>Profile</span>
            </button>
            <UserButton afterSignOutUrl="/" />
            <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
              <AiOutlineShopping />
              <span className="cart-item-qty">{totalQuantities}</span>
            </button>
          </div>
        </SignedIn>
      </div>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar