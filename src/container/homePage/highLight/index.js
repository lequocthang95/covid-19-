import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import HighLightCard from './card';

export default function HighLight({ report }) {
    const cardItems = [
        { 
            title: 'Số ca test',
            count: report.tests,
            type: 'tests'
        },
        { 
            title: 'Số ca nhiễm',
            count: report.cases,
            type: 'cases'
        },
        { 
            title: 'Số ca khỏi',
            count: report.recovered,
            type: 'recovered'
        },
        { 
            title: 'Số ca tử vong',
            count: report.deaths,
            type: 'deaths'
        },

    ];
    const today =[
        { 
            title: 'Số ca nhiễm',
            count: report.todayCases,
            type: 'todayCases'
        },
        { 
            title: 'Số ca tử vong',
            count: report.todayDeaths,
            type: 'todayDeaths'
        }
    ]
    return (
        <div>
            <Typography variant='h5'> Hôm nay </Typography>
            <Grid container spacing={3} style={{marginBottom: '30px', marginTop: '10px'}}>
                {
                    today.map( (item) => (
                        <Grid item sm={4} xs={12} key={item.title} >
                            <HighLightCard title={item.title} count={item.count} type={item.type}/>
                        </Grid>
                    ))    
                }   
            </Grid>
            <Typography variant='h5'> Tổng số </Typography>
            <Grid container spacing={3} style={{marginTop: '10px'}}>
                {
                    cardItems.map( (item) => (
                        <Grid item sm={3} xs={12} key={item.title} >
                            <HighLightCard title={item.title} count={item.count} type={item.type}/>
                        </Grid>
                    ))    
                }   
            </Grid>
           
            
        </div>
    )
}