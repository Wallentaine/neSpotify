import React, { ReactNode } from 'react';
import Navbar from '../components/navbar/Navbar';
import { Container } from '@mui/system';

interface MainLayoutChildren {
    children?: ReactNode;
}

const MainLayout: React.FC<MainLayoutChildren> = ({ children }) => {
    return (
        <>
            <Navbar/>
            <Container>
                {children}
            </Container>
        </>
    );
};

export default MainLayout;
