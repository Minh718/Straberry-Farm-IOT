import React from 'react'
import { FormLabel, Typography, Stack, FormGroup } from '@mui/material'

import ControlSwitch from './ControlSwitch'

const ManualControl = () => {
    return (
        <FormGroup>
            <FormLabel component="legend">
                <Typography color='black' variant="h5" sx={{ textTransform: "uppercase", padding: '20px' }}>Điều khiển thủ công</Typography>
            </FormLabel>
            <Stack direction="row" spacing={2}>
                {[0, 1, 2].map(x => <ControlSwitch key={x} type={x} />)}
            </Stack>
        </FormGroup>
    )
}

export default ManualControl