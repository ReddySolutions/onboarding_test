import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';

export default function ViewProgress({ ProgressData }) {
  return (
    <Box sx={{ width: '100%' }}>
      {ProgressData?.data?.map((user) => (
        <Box key={user.id} sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ my: 2, mb: 2, ml: 2, textTransform: "capitalize", fontSize: "18px", fontWeight: "600", display: "flex", alignItems: "center" }} > <PersonIcon sx={{ mr: 1 }} /> {`${user.username}`}</Typography>
          <Stepper activeStep={user.current_position - 1}>
            {ProgressData?.activities?.map((activity, index) => (
              <Step key={index}>
                <StepLabel>{activity.name}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      ))}
    </Box>
  );
}
