import React, {Component} from 'react';
import {Link} from 'react-router-dom';


function Dashboard() {
return (
    <div>
        <header className="dashboard-header">
            <nav className="dashboard-nav">
        <Link to='/Wizard'><h1>Wizard</h1></Link>
            </nav>
        </header>
    </div>
)
}

export default Dashboard;