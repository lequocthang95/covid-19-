import React from 'react';
import { Grid } from '@material-ui/core';
import HighLightCard from './card';

export default function HighLight({ report }) {
    const data = report && report.length ? report[report.length - 1] : [];
    const cardItems = [
        { 
            title: 'Số ca nhiễm',
            count: data.Confirmed,
            type: 'confirmed'
        },
        { 
            title: 'Số ca khỏi',
            count: data.Recovered,
            type: 'recovered'
        },
        { 
            title: 'Số ca tử vong',
            count: data.Deaths,
            type: 'deaths'
        }
    ];
    return (
        <Grid container spacing={3}>
        {
            cardItems.map( (item) => (
                <Grid item sm={4} xs={12} key={item.title} >
                    <HighLightCard title={item.title} count={item.count} type={item.type}/>
                </Grid>
            ))    
        }   
        </Grid>
    )
}