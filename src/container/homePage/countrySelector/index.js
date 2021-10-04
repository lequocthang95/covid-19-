import { FormControl, FormHelperText, InputLabel,NativeSelect, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: `${theme.spacing(3)}px 0`,
    }
}))

export default function CountrySelector({value, handleOnChange, countries}) {
    const styles = useStyles()
    return (
        <FormControl className={styles.formControl}>
            <InputLabel htmlFor="country-selector" shrink > Quốc Gia</InputLabel>
            <NativeSelect 
                value={value}
                onChange={handleOnChange}
                inputProps={{
                    name: 'country',
                    id: 'country-selector'
                }}>
                {countries.map((Country, index) => (
                    <option key={index} >
                      {Country.country}
                    </option>
                  ))}
            </NativeSelect>
            <FormHelperText>Lựa chọn quốc gia</FormHelperText>
        </FormControl>
    )
}
