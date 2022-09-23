import React from "react";

const Header = () => {
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        <img src="http://localhost:3000/images/testlogo3.png" alt="Alternative Society" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i class="fas fa-bars ms-1"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li class="nav-item"><a class="nav-link" href="/Notice">Notice</a></li>
                            <li class="nav-item"><a class="nav-link" href="/Community">Community</a></li>
                            <li class="nav-item"><a class="nav-link" href="/QnA">Q&A</a></li>
                            <li class="nav-item"><a class="nav-link" href="/About">About</a></li>
                            <li class="nav-item"><a class="nav-link" href="/Find">Find</a></li>
                            <li class="nav-item"><a class="nav-link" href="/FAQ">FAQ</a></li>
                            <li class="nav-item"><a class="nav-link" href="/Login">Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </>
    )
}
export default Header;