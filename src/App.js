import React from 'react'
import { Container, Grid, Box } from '@chakra-ui/react'
import Pagination from './examples/Pagination'
import SortBy_Resize from './examples/SortBy_Resize'
import DynamicRows from './examples/DynamicRows'


function App() {
  return (
      <Grid templateColumns={'repeat(1, 1fr)'} templateRows='repeat(3, 1fr)'>
        <Box>
          <Pagination/>
        </Box>
        <Box>
        <SortBy_Resize/>
        </Box>
      </Grid>
  )
}

export default App