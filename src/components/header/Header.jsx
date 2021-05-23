import React from 'react'
import { auth } from '../../firebase/firebaseFunction'
import './header.scss'

import { Link } from 'react-router-dom'


function Header({ currentUser }) {
    return (
        <header className='header'>
            <Link to='/'><h2 className='logo'>Weight Tracker</h2></Link>
            {currentUser ?
                <div><strong></strong>signed in {(currentUser.displayName == null) ? <strong>Anonymously</strong> : <span>as <strong>{currentUser.displayName}</strong></span>}</div> :
                ''}
            {currentUser ? <button onClick={() => auth.signOut()}>Sign Out</button> : <Link to='/signin'>Sign In</Link>}

        </header>
    )
}

export default Header
