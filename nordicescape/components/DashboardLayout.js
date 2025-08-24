import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className="dashboard-layout">
            <header>
                <h1>Dashboard</h1>
                {/* You can include the Navbar component here if needed */}
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>© 2023 Your Company Name</p>
            </footer>
        </div>
    );
};

export default DashboardLayout;