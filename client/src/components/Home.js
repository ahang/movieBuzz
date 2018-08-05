import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Grid, Button } from '@material-ui/core';

const Home = () => {
  return (
    <div style={{ flex: 1 }}>
      <Grid
        container
        spacing={24}
        justify={'column'}
        alignItems={'center'}
        alignContent={'center'}
        style={{ width: '50%', margin: 'auto', marginTop: '25%' }}
      >
        <Grid item xs={12}>
          <Paper>
            <Button size="large" fullWidth>
              <Link to="/login">Login</Link>
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper>
            <Button
              onClick={() => {
                console.log('register');
              }}
              size="large"
              fullWidth
            >
              Register
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
