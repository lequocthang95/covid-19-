import React from 'react';
import CountrySelector from './countrySelector';
import HighLight from './highLight';
import Summary from './summary';
import { useEffect, useState } from 'react';
import { getCountries, getReports } from '../../apis';
import { sortBy } from 'lodash';
import { Container, Typography } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/vi';
import '@fontsource/roboto';


moment.locale('vi');

export default function HomePage() {
    const [countries,setCountries] = useState([])
    const [selectedCountry,setSelectedCountry] = useState('')
    const [report,setReport] = useState([])
    const [mapData, setMapData] = useState({})
    
    useEffect(() =>{
        getCountries()
        .then((res) =>{
            const countries = sortBy(res.data,'Country')
            setCountries(countries);
            setSelectedCountry('vn')
        })
    },[])

    const handleOnChange= (e)=>{
        setSelectedCountry(e.target.value)
    }
    useEffect(() =>{
        if (selectedCountry){
            const { Slug }=countries.find(country => country.ISO2.toLowerCase() === selectedCountry);
            getReports(Slug)
                .then((res) =>{
                    res.data.pop();
                    setReport(res.data)
                });
        }} ,[countries,selectedCountry])
    useEffect(() =>{
        if (selectedCountry){
            import(
                `@highcharts/map-collection/countries/${selectedCountry}/${selectedCountry}-all.geo.json`
            )
             .then((res) => setMapData(res)
             )
        }
    },[selectedCountry])
    return (
        <Container style={{ marginTop: 20 }}>
            <Typography variant='h2' component='h2'>
                 Số liệu COVID-19
            </Typography>
            <Typography>{moment().format('LLL')}</Typography>
            <CountrySelector countries={countries} handleOnChange={handleOnChange} value={selectedCountry}/>
            <HighLight report={report} />
            <Summary report={report} mapData={mapData} />
        </Container>
    )
}