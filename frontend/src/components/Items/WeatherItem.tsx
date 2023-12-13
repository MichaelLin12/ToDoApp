import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export default function WeatherItem() {
  return (
    <>
          <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div">
              city
            </Typography>
            <Typography variant="body1" component="div">
              <Box display="flex" alignItems="center">
                temperature°C
              </Box>
            </Typography>
            <Typography variant="body2" component="div">
              description
            </Typography>
          </CardContent>
        </Card>
    </>
  )
}
