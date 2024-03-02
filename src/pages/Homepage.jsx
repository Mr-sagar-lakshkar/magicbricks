import React from 'react'
import NavbarCom from '../components/headers/NavbarCom'
import CardCategory from '../components/cards/CardCategory'
import CardPropertyDetail from '../components/cards/CardPropertyDetail'
import CardPropertyServices from '../components/cards/CardPropertyServices'
import CardExplore from '../components/cards/CardExplore'
import CardService from '../components/cards/CardService'
import { Container, Grid } from '@mui/material'
import NewsFeedList from '../components/others/NewsFeedList'
import NewsVideoFeed from '../components/others/NewsVideoFeed'
import Box from '@mui/material/Box';
import { popularOwnerProperties, cardServices, CardPropertySnapshotData, CardPropertySnapshotData1 } from '../database/db';
import CardPropertySnapshot from '../components/cards/CardPropertySnapshot'
import PropertyOptionList from '../components/others/PropertyOptionList'


function Homepage() {
  return (
    <Container maxWidth="xl">
      <NavbarCom />
      <CardCategory />
      <CardPropertyDetail title={'Popular Owner Properties'} data={popularOwnerProperties} />
      <CardPropertyServices title={'Property Services'} data={cardServices} />
      <CardExplore />
      <CardPropertyDetail title={'Exclusive Owner Properties in Jaipur'} data={popularOwnerProperties} />
      <CardService />

      <Box sx={{ flexGrow: 1 }} mt={5}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} md={6} lg={6}>
            <NewsFeedList />
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={6}>
            <NewsVideoFeed />
          </Grid>
        </Grid>
      </Box>

      <CardPropertyDetail title={'Fresh Properties in Jaipur'} data={popularOwnerProperties} />
      <CardPropertySnapshot title='Jaipur Property Snapshot' data={CardPropertySnapshotData} snapShotData={CardPropertySnapshotData1} />
      <PropertyOptionList />

    </Container >
  )
}

export default Homepage