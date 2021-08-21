import React from 'react';
import { Grid } from '@material-ui/core';
import Chart from '../../../components/highchart/chart';
import HighMaps from '../../../components/highchart/map';


export default function Summary({ report, mapData}) {
    return (
    <div style={{ height: '500px', marginTop: 10 }}>
       <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
            <Chart data={report}/>
        </Grid>
        <Grid item sm={4} xs={12}>
            <HighMaps mapData={mapData} />
        </Grid>
       </Grid>
    </div>
    )
}