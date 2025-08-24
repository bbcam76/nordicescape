import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const Dashboard = () => {
    return (
        <DashboardLayout>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p>Welcome to your dashboard! Here you can manage your deals and view analytics.</p>
        </DashboardLayout>
    );
};

export default Dashboard;