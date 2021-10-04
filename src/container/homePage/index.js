import React from 'react';
import CountrySelector from './countrySelector';
import HighLight from './highLight';
import { useEffect, useState } from 'react';
import { getCountries } from '../../apis';
import { sortBy } from 'lodash';
import { Container, Typography } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/vi';
import '@fontsource/roboto';
import axios from 'axios'

export default function HomePage() {
    const [countries,setCountries] = useState([])
    const [selectedCountry,setSelectedCountry] = useState('Vietnam')
    const [report,setReport] = useState([])
    
    useEffect(() =>{
        getCountries()
        .then((res) =>{
            const countries = sortBy(res.data,'Country')
            setCountries(countries);
        })
    },[])

    const handleOnChange= (e)=>{
        setSelectedCountry(e.target.value)
    }
    useEffect(() =>{
        if (selectedCountry){
            axios.get(`https://corona.lmao.ninja/v2/countries/${selectedCountry}?yesterday&strict&query%20`)
            .then(function (response) {
                setReport(response.data);
              })
            .catch(function (error) {
            console.log(error);
            });
        }} ,[selectedCountry])
    return (
        <Container style={{ marginTop: 20 }}>
            <Typography variant='h2' component='h2'>
                 Số liệu COVID-19
            </Typography>
            <Typography>{moment().format('LLL')}</Typography>
            <CountrySelector countries={countries} handleOnChange={handleOnChange} value={selectedCountry}/>
            <HighLight report={report} />
            
        </Container>
    )
}