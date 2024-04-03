import React from "react";
import { Grid } from "@mui/material";
import Panel from "../Panel/Panel";
import Leaderboard from "../Leaderboard/Leaderboard";
import './Content.css';

const Content = () => {
    return(
        <div className="content-main">
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
        </div>
    )
}

export default Content;