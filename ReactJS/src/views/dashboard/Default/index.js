import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import EnrollementReport from "./EnrollementReport";
import LeaderBoard from "./LeaderBoard";
import { gridSpacing } from "store/constant";
import ViewProgress from "./ViewProgress";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Totalenroll from "./TotalEnroll";
import Totalactivity from "./TotalActivity";

const Dashboard = () => {
	const [isLoading, setLoading] = useState(true);
	const [arrayData, setArrayData] = useState({});
	const [leaderboardData, setLeaderboardData] = useState([]);
	const [ProgressData, setProgressData] = useState([]);


	const fetchDashboardData = async () => {
		await fetch('http://localhost:8000/training/dashboard/', {
			method: "GET",
			headers: {
				"Access-Control-Allow-Origin": "*"
			},
		})
			.then(response => {
				if (!response.ok) {
					throw new Error('Failed to fetch dashboard data');
				}
				return response.json();
			})
			.then(data => {
				console.log("Dashboard data:", data);
				setArrayData(data);
				setLoading(false);
			})
			.catch(error => {
				console.error('Error fetching dashboard data:', error);
				setLoading(false);
			});
	};

	// Extracting data from arrayData.report
	const categories = arrayData?.data?.report.map((item) => item.name);
	const dataPoints = arrayData?.data?.report.map(
		(item) => item?.total_completion
	);

	// Creating chartData object
	const chartData = {
		options: {
			chart: {
				toolbar: {
					show: false,
				},
				id: "basic-bar",
			},
			xaxis: {
				categories: categories || [],
			},
		},
		series: [
			{
				name: "Total Completion",
				data: dataPoints || [],
			},
		],
	};

	const fetchLeaderboardData = async () => {
		await fetch('http://localhost:8000/training/students/', {
			method: "GET",
			headers: {
				"Access-Control-Allow-Origin": "*"
			},
		})
			.then(response => {
				if (!response.ok) {
					throw new Error('Failed to fetch leaderboard data');
				}
				return response.json();
			})
			.then(data => {
				console.log("Leaderboard data:", data);
				setLeaderboardData(data?.data);
				setLoading(false);
			})
			.catch(error => {
				console.error('Error fetching leaderboard data:', error);
				setLoading(false);
			});
	};
	const fetchProgressData = async () => {
		await fetch('http://localhost:8000/training/progress/', {
			method: "GET",
			headers: {
				"Access-Control-Allow-Origin": "*"
			},
		})
			.then(response => {
				if (!response.ok) {
					throw new Error('Failed to fetch leaderboard data');
				}
				return response.json();
			})
			.then(data => {
				console.log("Leaderboard data:", data);
				setProgressData(data);
				setLoading(false);
			})
			.catch(error => {
				console.error('Error fetching leaderboard data:', error);
				setLoading(false);
			});
	};
console.log("ProgressData",ProgressData);
	useEffect(() => {
		fetchDashboardData();
		fetchLeaderboardData();
		fetchProgressData();
		setLoading(false);
	}, []);

	return (
		<Grid container spacing={gridSpacing}>
			<Grid item xs={12}>
				<Grid container spacing={gridSpacing}>
					<Grid item lg={4} md={6} sm={6} xs={12}>
						{/* <EnrolledCard isLoading={isLoading} /> */}
						<Totalenroll arrayData={arrayData} isLoading={isLoading} />
					</Grid>
					<Grid item lg={4} md={6} sm={6} xs={12}>
						{/* <TotalOrderLineChartCard isLoading={isLoading} /> */}
						<Totalactivity arrayData={arrayData} isLoading={isLoading} />
					</Grid>
					<Grid item lg={4} md={12} sm={12} xs={12}></Grid>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<Grid container spacing={gridSpacing}>
					<Grid item xs={12} md={8}>
						<EnrollementReport chartData={chartData} isLoading={isLoading} />
					</Grid>
					<Grid item xs={12} md={4}>
						{/* Include the PopularCard component with the leaderboard data */}
						<LeaderBoard isLoading={isLoading} data={leaderboardData} />
					</Grid>
					<Grid item xs={12} md={12}>
						<Card
							variant="outlined"
							sx={{ padding: "30px 20px" }}
							className="view-progress"
						>
							<Typography variant="h3" sx={{ mb: 2 }}>
								Progress Report
							</Typography>
							<ViewProgress isLoading={isLoading} ProgressData={ProgressData} />
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};


export default Dashboard;