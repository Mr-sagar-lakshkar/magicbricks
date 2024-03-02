import { Container } from '@mui/material'
import React from 'react'
import ProperDahboard from '../components/others/ProperDahboard';
import NavbarCom from '../components/headers/NavbarCom';

function Detailpage() {
    return (
        <Container maxWidth="lg">
            <NavbarCom />
            <ProperDahboard />

        </Container>
    );
}

export default Detailpage