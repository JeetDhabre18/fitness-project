import React from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => (
  <Box>
    <HeroBanner />
    <SearchExercises />
    <Exercises />
  </Box>
);

export default Home;
