import React from 'react'
import { Stack, Card, CardHeader, CardContent, Box, Slider, Typography} from '@mui/material';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import LightModeIcon from '@mui/icons-material/LightMode';

import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { TimePicker } from '@mui/x-date-pickers';

const types = [
    { name: "Điều hòa", icon: <DeviceThermostatIcon sx={{ fontSize: 50 }} /> },
    { name: "Máy bơm", icon: <OpacityIcon sx={{ fontSize: 50 }} /> },
    { name: "Đèn", icon: <LightModeIcon sx={{ fontSize: 50 }} /> }
]
const ControlCard = ({ type }) => {
    const { name, icon } = types[type];
    console.log(name)
    return (
        <Card elevation={3}>
            <CardHeader title={name}></CardHeader>
            <CardContent>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <TimePicker label="Bắt đầu" />
                    <Typography sx={{ px: 1 }}>to</Typography>
                    <TimePicker label="Kết thúc" />
                </Stack>
                <Stack alignItems="center" padding={3} pb={0} >
                    <Box sx={{ maxWidth: 200 }}>
                        <CircularProgressbarWithChildren value={40}>
                            {icon}
                        </CircularProgressbarWithChildren>
                    </Box>
                    <Slider defaultValue={50} valueLabelDisplay="auto" />
                </Stack>
            </CardContent>
        </Card>
    )
}

export default ControlCard