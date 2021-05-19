import React from 'react'
import "./Nav.css"

export default function Nav() {
    return (
    <nav class="nav">
        <button class="navButton">
            <a href="#" class="navLink activeLink">
                Home
            </a>
        </button>
        <button class="navButton">
            <a href="#" class="navLink">
                About Us
            </a>
        </button>
        <button class="navButton">
            <a href="#" class="navLink">
                Projects
            </a>
        </button>
    </nav>
    )
}
