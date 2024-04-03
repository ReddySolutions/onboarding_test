import React from 'react'
import { BottomNavigation, Box, BottomNavigationAction } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';

const Footer = () => {
  const styles = {
      tr: {
          borderRadius: '15px',
          padding: '1rem',
        '&:hover': {
          background: "#F5F5F5",
        }
      }
  };
  return (
    <Box sx={{ 
        flexGrow: 1, 
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', 
        backgroundColor:'#ffffff',
        padding: '1rem',
        marginTop: '1rem',
        marginBottom: '0',
        position: 'sticky',
        left:0,
        bottom:0,
        right:0,
    }}>
        <BottomNavigation
            showLabels
            className='nav-button'
        >
            <BottomNavigationAction sx={styles.tr} label="Contact" icon={<EmailOutlinedIcon />} />
            <BottomNavigationAction sx={styles.tr} label="Careers" icon={<WorkOutlineOutlinedIcon />} />
            <BottomNavigationAction sx={styles.tr} label="Terms & Conditions" icon={<ListAltOutlinedIcon />} />
        </BottomNavigation>
    </Box>
  )
}

export default Footer
