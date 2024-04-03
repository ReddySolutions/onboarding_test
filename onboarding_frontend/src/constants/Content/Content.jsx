import React from "react";
import { Grid } from "@mui/material";
import Panel from "../Panel/Panel";
import Leaderboard from "../Leaderboard/Leaderboard";
import './Content.css';
import {motion} from 'framer-motion';

const Content = () => {
    return(
            <motion.div
                 whileInView={{ x: [-100, 0], opacity: [0,1]}}
                 transition={{ duration: 0.5 }}
                 className="content-main"
            >
                <Grid 
                    className="content-main" 
                    container 
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    sx={{ minHeight: '100%', margin: '1rem 0'}}
                >
                    <Grid item sm={3} md={3}>
                        <Panel/>
                    </Grid>
                    <Grid item sm={7} md={7} alignItems='center'>
                        <Leaderboard/>
                    </Grid>
                </Grid>
            </motion.div>
       
    )
}

export default Content;