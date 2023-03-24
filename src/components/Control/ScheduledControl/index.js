import React from 'react'
import { Stack, FormGroup, FormLabel, FormControlLabel, ButtonGroup, Button, Grid, Typography, Switch } from '@mui/material'

import ControlCard from './ControlCard'

const ScheduledControl = () => {
    return (
        <FormGroup>
            <Stack direction="row" alignItems="center">
                <FormLabel component="legend">
                    <Typography variant="h5" sx={{ textTransform: "uppercase", padding: '20px' }}>Đặt lịch trình</Typography>
                </FormLabel>
                <FormControlLabel control={<Switch defaultChecked />} label="Bật" />
                <ButtonGroup sx={{ ml: 'auto' }}>
                    <Button sx={{ width: 100 }} type="submit" padding="auto" variant="contained">Lưu</Button>
                    <Button sx={{ width: 100 }} type="reset" variant="contained" color='error'>Làm mới</Button>
                </ButtonGroup>
            </Stack>

            <Grid container spacing={2} justifyContent="space-around">
                {[0, 1, 2].map(x => <Grid item key={x} sx={12} md={4}>
                    <ControlCard type={x} />
                </Grid>)
                }
            </Grid>
        </FormGroup>
    )
}

export default ScheduledControl