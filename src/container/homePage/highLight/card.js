import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import CountUp from 'react-countup'

const useStyles = makeStyles({
    wrapper: (props) => {
      if (props.type === 'confirmed') return { borderLeft: '5px solid #c9302c' };
      if (props.type === 'recovered') return { borderLeft: '5px solid #28a745' };
      else return { borderLeft: '5px solid gray' };
    },
    title: { fontSize: 18, marginBottom: 5 },
    count: { fontWeight: 'bold', fontSize: 18 },
  });

export default function HighLightCard( {title, count, type} ) {
    const classes = useStyles({type})
    return (
        <Card className={classes.wrapper}>
            <CardContent>
                <Typography components='p' variant='body2' className={classes.title}>
                    {title}
                </Typography>
                <Typography components='span' variant='body2' className={classes.count}>
                   <CountUp end={count || 0} duration={2} separator=' '/>
                </Typography>
            </CardContent>
        </Card>
    )
}
