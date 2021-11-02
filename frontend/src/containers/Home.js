import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => (
    <div className='container'>
        <div class="jumbotron mt-5">
          <h1 class="display-4">Welcome to Authentication System</h1>
           <p class="lead">This is an incredible authentication system with production level features</p>
           <hr class="my-4"/>
            <p>Click the login button.</p>
            <p class="lead">
            <Link class="btn btn-primary btn-lg" to='/login' role="button">Login</Link>
           </p>
       </div>
    </div>
)

export default Home;