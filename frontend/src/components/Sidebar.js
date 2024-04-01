import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "25%",
        borderRight: "1px solid #232323",
      }}
    >
      <Box
        sx={{
          color: "#fff",
          padding: "60px 0px 60px 70px",
          fontSize: 30,
          fontWeight: 700,
        }}
      >
        Reddy Solutions
      </Box>
      <List>
        <ListItem key={"Home"} disablePadding>
          <ListItemButton>
            <HomeRoundedIcon
              sx={{ color: "#fff", marginLeft: "52px" }}
            ></HomeRoundedIcon>
            <Link to="/home">
              <ListItemText
                primary={"Home"}
                sx={{
                  color: "#fff",
                  paddingLeft: "16px",
                  paddingTop: "2px",
                }}
              />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem key={"trainings"} disablePadding>
          <ListItemButton>
            <CoPresentIcon
              sx={{ color: "#fff", marginLeft: "52px" }}
            ></CoPresentIcon>
            <Link to="/trainings">
              <ListItemText
                primary={"Trainings"}
                sx={{
                  color: "#fff",
                  paddingLeft: "16px",
                  paddingTop: "2px",
                }}
              />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem key={"Leaderboard"} disablePadding>
          <ListItemButton>
            <EmojiEventsRoundedIcon
              sx={{ color: "#fff", marginLeft: "52px" }}
            ></EmojiEventsRoundedIcon>
            <Link to="/leaderboard">
              <ListItemText
                primary={"Leaderboard"}
                sx={{
                  color: "#fff",
                  paddingLeft: "16px",
                  paddingTop: "2px",
                }}
              />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem key={"Events"} disablePadding>
          <ListItemButton>
            <CalendarMonthRoundedIcon
              sx={{ color: "#fff", marginLeft: "52px" }}
            ></CalendarMonthRoundedIcon>
            <Link to="/events">
              <ListItemText
                primary={"Events"}
                sx={{
                  color: "#fff",
                  paddingLeft: "16px",
                  paddingTop: "2px",
                }}
              />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem key={"Quizes"} disablePadding>
          <ListItemButton>
            <QuizRoundedIcon
              sx={{ color: "#fff", marginLeft: "52px" }}
            ></QuizRoundedIcon>
            <Link to="/quizes">
              <ListItemText
                primary={"Quizes"}
                sx={{
                  color: "#fff",
                  paddingLeft: "16px",
                  paddingTop: "2px",
                }}
              />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem key={"Rewards"} disablePadding>
          <ListItemButton>
            <WorkspacePremiumRoundedIcon
              sx={{ color: "#fff", marginLeft: "52px" }}
            ></WorkspacePremiumRoundedIcon>
            <Link to="/rewards">
              <ListItemText
                primary={"Rewards"}
                sx={{
                  color: "#fff",
                  paddingLeft: "16px",
                  paddingTop: "2px",
                }}
              />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
