import React from 'react'
import { Grid, Stack, Typography, Slider, Paper } from '@mui/material';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import ShowerIcon from '@mui/icons-material/Shower';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { deepPurple, lightBlue } from '@mui/material/colors';
import { StyledSwitch } from './styles';


const types = [
    { name: "Điều hòa", icon: <AcUnitIcon sx={{ color: lightBlue[50] }} /> },
    { name: "Máy bơm", icon: <ShowerIcon /> },
    { name: "Đèn", icon: <LightbulbIcon /> }
]

const ControlStyledSwitch = ({ type }) => {
    const { name, icon } = types[type];
    return (
        <Paper elevation={3} sx={{ padding: 2, width: "10rem", height: "10rem", borderRadius: "2rem", bgcolor: !type ? deepPurple[900] : null }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="space-between">
                        {icon}
                        <StyledSwitch defaultChecked />
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

export default ControlStyledSwitch