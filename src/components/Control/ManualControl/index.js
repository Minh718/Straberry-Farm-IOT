import React from 'react'
import { FormLabel, Typography, Stack, FormGroup } from '@mui/material'

import ControlSwitch from './ControlSwitch'
import { useGlobalContext } from '../../../context/index'
const ManualControl = () => {
    const {lightBtn,airBtn,pumperBtn} = useGlobalContext()
    
    const devices= [
        { 
            feed_id: 'fan',
            value: airBtn === '1'? true:false
        },
        { 
            feed_id: 'pumper',
            value: pumperBtn === '1'? true:false
        },        { 
            feed_id: 'led',
            value: lightBtn === '1'? true:false
        },
    ]
    return (
        <FormGroup>
            <FormLabel component="legend" sx={{py:0}}>
                <Typography color='black' variant="h5" sx={{ textTransform: "uppercase", pb: 2 }}>Điều khiển thủ công</Typography>
            </FormLabel>
            <Stack direction="row" spacing={2}>
                {devices.map((device,idx) => <ControlSwitch key={idx} type={idx} device={device}/>)}
            </Stack>
        </FormGroup>
    )
}

export default ManualControl