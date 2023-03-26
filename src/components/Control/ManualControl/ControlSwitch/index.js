import { Grid, Stack, Typography, Slider, Paper,Switch } from '@mui/material';
import React,{useState,useEffect} from 'react'


import AcUnitIcon from '@mui/icons-material/AcUnit';
import ShowerIcon from '@mui/icons-material/Shower';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { deepPurple, lightBlue } from '@mui/material/colors';
import { StyledSwitch } from './styles';


import {publish} from '../../../../utils/adafruit'
const types = [
    { name: "Điều hòa", icon: <AcUnitIcon sx={{ color: lightBlue[50] }} /> },
    { name: "Máy bơm", icon: <ShowerIcon /> },
    { name: "Đèn", icon: <LightbulbIcon /> }
]

const ControlSwitch = (props) => {
    const {device,type} = props
    const [checked,setChecked] = useState(device.value)
    useEffect(()=>{
        setChecked(device.value)
    },[device])
    const {name, icon} = types[type];
    const handleChange = ()=>{
        setChecked(state => {
            if (state === true){
                publish(device.feed_id,'0')
            }else{
                publish(device.feed_id,'1')
            }
            return !state
        })

    }
    return (
        <Paper elevation={3} sx={{ padding: 2, width: "10rem", height: "10rem", borderRadius: "2rem", bgcolor: !type ? deepPurple[900] : null }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="space-between">
                        {icon}
                        <Switch 
                        checked={checked}
                        onChange={handleChange}
                         />
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Slider
                        valueLabelDisplay
                        defaultValue={30}
                        sx={type ? {} : { color: 'white' }} />
                </Grid>

                <Grid item xs={12}>
                    <Typography sx={type ? {} : { color: lightBlue[50] }}>{`${name} bật`}</Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}
export default ControlSwitch