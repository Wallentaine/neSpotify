import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { Typography } from '@mui/material';

const Index = () => {
    return (
        <>
            <Navbar/>
            <div className="center">
                <Typography variant="h2" gutterBottom color="secondary">Добро пожаловать!</Typography>
                <Typography variant="h4" gutterBottom color="secondary">Здесь собраны лучшие треки</Typography>
            </div>

            <style jsx>
                {`
                    .center {
                      margin-top: 150px;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                    }
                `}
            </style>
        </>
    );
};

export default Index;
