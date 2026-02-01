import React from 'react'

import { Box, Stack, Button, Typography } from "@mui/material"

const PlacementScreen = () => {
    return (
        <Stack flex="1 1 auto"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{ px:3 }}
        >
            <Button justifyContent="bottom" variant="contained">Back</Button>
        <Typography>Platziere nun bitte das Widget auf deinem Startbildschirm</Typography>
        <Typography>Dies gibt dir einfachen und schnellen Zugriff sobald du dein Handy entsperrst</Typography>
        <Box></Box>
        <Button justifyContent="bottom" variant="contained">Widget</Button>
        <Button justifyContent="bottom" variant="contained">Weiter</Button>
        </Stack>
    )
}

export default PlacementScreen