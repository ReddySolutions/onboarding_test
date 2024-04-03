import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import LoadingModal from '../../components/LoadingModal';

const Panel = () => {
    const [trainings, setTrainings] = useState([]);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        fetch('http://localhost:8000/training/activities/')
          .then(res => res.json())
          .then(data => setTrainings(data))
    },[])

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    async function postNew(url, data){
        return fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.data)
    }

    const handleClick = (value) => {
        setShowModal(true)
        const userNum = randomIntFromInterval(1, 3);
        const newData = {
            activity: value,
            user: userNum
        }
        postNew('http://localhost:8000/training/logs/', newData)
            .then((data) => {
                console.log(data)
            })
    }

    if(showModal){
        setTimeout(function(){
            window.location.reload();
        }, 5000);
    }
    
    return(
        <Box sx={{ 
            backgroundColor: '#ffffff', 
            height: '100%',
            borderRadius: '15px',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
            width: '100%'
            }}
        >
            {showModal && <LoadingModal/>}
            <Box>
                <List>
                    <Typography sx={{textAlign:'center', fontWeight:'bolder', fontFamily: 'Rubik', paddingTop: '1rem'}}>Leaderboards</Typography>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <WorkOutlineOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText><Typography sx={{color: '#313bac', fontWeight: '400', fontFamily: 'Rubik'}}>Active</Typography></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <WorkHistoryOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText><Typography sx={{color: '#313bac', fontWeight: '400', fontFamily: 'Rubik'}}>Historical</Typography></ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    <Typography sx={{textAlign:'center', fontWeight:'bolder', fontFamily: 'Rubik', paddingTop: '1rem'}}>My Records</Typography>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText><Typography sx={{color: '#313bac', fontWeight: '400', fontFamily: 'Rubik'}}>Active</Typography></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText><Typography sx={{color: '#313bac', fontWeight: '400', fontFamily: 'Rubik'}}>Historical</Typography></ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    <Typography sx={{textAlign:'center', fontWeight:'bolder', fontFamily: 'Rubik', paddingTop: '1rem'}}>Complete Training</Typography>
                    {
                        trainings.map((training) => {
                            return(
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => handleClick(training.name)}>
                                        <ListItemIcon>
                                            <AssessmentOutlinedIcon/>
                                        </ListItemIcon>
                                        <ListItemText><Typography sx={{color: '#313bac', fontWeight: '400', fontFamily: 'Rubik'}}>{training.name}</Typography></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            )
                        })
                    }
                </List>
                <Divider />
                <Typography sx={{textAlign:'center', fontWeight:'bolder', fontFamily: 'Rubik', paddingTop: '1rem'}}>Misc. Data</Typography>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <StackedLineChartOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText><Typography sx={{color: '#313bac', fontWeight: '400', fontFamily: 'Rubik'}}>Activities</Typography></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <StackedLineChartOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText><Typography sx={{color: '#313bac', fontWeight: '400', fontFamily: 'Rubik'}}>User Activities</Typography></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <StackedLineChartOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText><Typography sx={{color: '#313bac', fontWeight: '400', fontFamily: 'Rubik'}}>User Activity Logs</Typography></ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
            </Box>
        </Box>
    )
}
export default Panel;