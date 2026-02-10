import React from 'react'
import Hero from '../components/Hero'
import RoomsSuites from '../components/RoomsSuites'
import Amenities from '../components/Amenities'
import EatDrink from '../components/EatDrink'
import Meetings from '../components/Meetings'
import ExploreTheArea from '../components/ExploreTheArea'
import Gallery from '../components/Gallery'

const Home = () => {
  return (
    <>
      <Hero />
      <RoomsSuites />
      <Amenities />
      <EatDrink />
      <Meetings />
      <ExploreTheArea />
      <Gallery />
    </>
  )
}

export default Home
