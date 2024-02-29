import React from 'react'
import NavbarCom from '../components/headers/NavbarCom'
import CardCategory from '../components/cards/CardCategory'
import CardPropertyDetail from '../components/cards/CardPropertyDetail'
import CardPropertyServices from '../components/cards/CardPropertyServices'
import CardExplore from '../components/cards/CardExplore'
import CardService from '../components/cards/CardService'
import { Container } from '@mui/material'
import NewsFeedList from '../components/others/NewsFeedList'

function Homepage() {
  return (
   <Container maxWidth="xl">
      <NavbarCom />
      <CardCategory />
      <CardPropertyDetail title={'Popular Owner Properties'}/>
      <CardPropertyServices />
      <CardExplore />
      <CardPropertyDetail title={'Exclusive Owner Properties in Jaipur'}/>
      <CardService/>
      <NewsFeedList/>
    </Container>
  )
}

export default Homepage