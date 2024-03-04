import { Card, CardContent, Container, Grid } from '@mui/material'
import React from 'react'
import ProperDashboard from '../components/others/ProperDashboard';
import NavbarCom from '../components/headers/NavbarCom';
import CardPropertyDetail from '../components/cards/CardPropertyDetail';
import { popularOwnerProperties, cardServices } from '../database/db';
import CardPropertyServices from '../components/cards/CardPropertyServices';
import PropertyDetail from '../components/others/PropertyDetail';
function Detailpage() {
    return (
        <Container maxWidth="xl">
            <NavbarCom />
            <Grid container maxWidth="md" textAlign='left'>
                <ProperDashboard />
                <Card sx={{ maxWidth: { xs: '100%' }, mb: '50px' }}>
                    <CardContent >
                        <CardPropertyDetail title={'Other Properties in this Project and Nearby'}
                            data={popularOwnerProperties} />
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: { xs: '100%' }, mb: '50px' }}>
                    <CardContent >
                        <CardPropertyDetail title={'People who viewed this property also liked'}
                            data={popularOwnerProperties} />
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: { xs: '100%' }, mb: '50px' }}>
                    <CardContent >
                        <CardPropertyDetail title={'Owner Properties Available Only on MB'}
                            data={popularOwnerProperties} />
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: { xs: '100%' }, mb: '50px' }}>
                    <CardContent >
                        <CardPropertyDetail title={'Verified on Magicbricks'}
                            data={popularOwnerProperties} />
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: { xs: '100%' }, mb: '50px' }}>
                    <CardContent >
                        <CardPropertyDetail title={'Properties in Similar Projects'}
                            data={popularOwnerProperties} />
                    </CardContent>
                </Card>

                <CardPropertyServices title={'Property Services'} data={cardServices} />

                <PropertyDetail/>
            </Grid>
        </Container>
    );
}

export default Detailpage