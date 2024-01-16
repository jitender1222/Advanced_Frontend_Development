import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import PostCardList from '../PostCardList/PostCardList';
import UserList from '../UserList/UserList';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MainContainer() {
  return (
    <Box container sx={{mt:"3rem" }}>
      <Grid
      container  
      justifyContent="center"
      alignItems="start"
       rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md:4 }}>
        <Grid>
          <UserList />
        </Grid>
        <Grid
        container 
        justifyContent="center"
        alignItems="center"
        direction={"column"} 
         md={8}>
            {/* User Post */}
         <PostCardList />
        </Grid>
      </Grid>
    </Box>
  );
}