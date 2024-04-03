import PropTypes from "prop-types";
// import { useState } from 'react';

// material-ui
import { useTheme, styled } from "@mui/material/styles";
import { Avatar, Box, Grid, Typography } from "@mui/material";

// project imports
import MainCard from "ui-component/cards/MainCard";
import SkeletonTotalOrderCard from "ui-component/cards/Skeleton/EarningCard";

// assets
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

const CardWrapper = styled(MainCard)(({ theme }) => ({
	backgroundColor: theme.palette.primary.dark,
	color: "#fff",
	overflow: "hidden",
	position: "relative",
	height: "185px",
	"&>div": {
		position: "relative",
		zIndex: 5,
	},
	"&:after": {
		content: '""',
		position: "absolute",
		width: 210,
		height: 210,
		background: theme.palette.primary[800],
		borderRadius: "50%",
		zIndex: 1,
		top: -85,
		right: -95,
		[theme.breakpoints.down("sm")]: {
			top: -105,
			right: -140,
		},
	},
	"&:before": {
		content: '""',
		position: "absolute",
		zIndex: 1,
		width: 210,
		height: 210,
		background: theme.palette.primary[800],
		borderRadius: "50%",
		top: -125,
		right: -15,
		opacity: 0.5,
		[theme.breakpoints.down("sm")]: {
			top: -155,
			right: -70,
		},
	},
}));

const TotalOrderLineChartCard = ({ isLoading }) => {
	const theme = useTheme();

	return (
		<>
			{isLoading ? (
				<SkeletonTotalOrderCard />
			) : (
				<CardWrapper border={false} content={false}>
					<Box sx={{ p: 2.25 }}>
						<Grid container direction="column">
							<Grid item>
								<Grid
									container
									justifyContent="space-between"
									className="header-card"
								>
									<Grid item>
										<Avatar
											variant="rounded"
											sx={{
												...theme.typography.commonAvatar,
												...theme.typography.largeAvatar,
												backgroundColor: theme.palette.primary[800],
												color: "#fff",
												mt: 1,
											}}
										>
											<LocalMallOutlinedIcon fontSize="inherit" />
										</Avatar>
									</Grid>
								</Grid>
							</Grid>
							<Grid item sx={{ mb: 0.75 }}>
								<Grid container alignItems="center">
									<Grid item xs={6}>
										<Grid container alignItems="center">
											<Grid item>
												<Typography
													sx={{
														fontSize: "2.125rem",
														fontWeight: 500,
														mr: 1,
														mt: 1.75,
														mb: 0.75,
													}}
												>
													50
												</Typography>
											</Grid>

											<Grid item xs={12}>
												<Typography
													sx={{
														fontSize: "1rem",
														fontWeight: 500,
														color: theme.palette.primary[200],
													}}
												>
													Total Classes
												</Typography>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Box>
				</CardWrapper>
			)}
		</>
	);
};

TotalOrderLineChartCard.propTypes = {
	isLoading: PropTypes.bool,
};

export default TotalOrderLineChartCard;
