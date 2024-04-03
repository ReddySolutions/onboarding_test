import PropTypes from "prop-types";
// import { useState } from 'react';
// material-ui
// import { useTheme } from "@mui/material/styles";
import {  CardContent, Divider, Grid, Typography } from "@mui/material";
// project imports
import MainCard from "ui-component/cards/MainCard";
import SkeletonPopularCard from "ui-component/cards/Skeleton/PopularCard";
import { gridSpacing } from "store/constant";
// assets
const Leaderboard = ({ isLoading, data }) => {
  // const theme = useTheme();
  // const [anchorEl, setAnchorEl] = useState(null);
  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Typography variant="h3">Leaderboard</Typography>
              </Grid>
              <Divider sx={{ my: 1.5 }} />
              <Grid item xs={12}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Typography variant="p">
                      <b>Rank</b>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="p">
                      <b>Name</b>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="p">
                      <b>Total Score</b>
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
              </Grid>

              {data.map((user, index) => (
                <Grid item xs={12} key={index}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item>
                      <Typography variant="subtitle1" color="inherit">
                        {index + 1}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" color="inherit">
                        {user.username}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Grid item>
                          <Typography variant="subtitle1" color="inherit">
                            {user.total_score}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  {index !== data.length - 1 && <Divider sx={{ my: 1.5 }} />}
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </MainCard>
      )}
    </>
  );
};
Leaderboard.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      total_score: PropTypes.number,
    })
  ),
};
export default Leaderboard;