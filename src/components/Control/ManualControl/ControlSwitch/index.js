import React from 'react'
import { Box, Grid, Stack, Switch, Typography, } from '@mui/material';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import ShowerIcon from '@mui/icons-material/Shower';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { deepPurple, lightBlue } from '@mui/material/colors';

const types = [
    { name: "Điều hòa", icon: <AcUnitIcon sx={{ color: lightBlue[50] }} /> },
    { name: "Máy bơm", icon: <ShowerIcon /> },
    { name: "Đèn", icon: <LightbulbIcon /> }
]

const ControlSwitch = ({type}) => {
    const {name, icon} = types[type];
    return (
        <Box sx={{ padding: 2, width: "10rem", height: "10rem", borderRadius: "2rem", bgcolor: deepPurple[900] }}>
            <Grid container>
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="space-between">
                        {icon}
                        <Switch defaultChecked />
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ color: lightBlue[50] }}>{`${name} bật`}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ControlSwitch