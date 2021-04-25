import Header from './Header';
import Image from './Image';
import Introduction from './Introduction';
// import "../src/App.css";
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Divider } from '@material-ui/core';


export default () => (
    <div>
        <Container fixed>
            <Header />
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Introduction />
                </Grid>
                <Grid item xs={6}>
                    <Image fname="image.jpg" />
                </Grid>
            </Grid>
        </Container>
    </div >
);