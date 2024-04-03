import React, { useEffect } from "react";
import "./../assets/css/Leaderboard.css";
import avatar9 from "./../assets/images/avatar9.png";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import CardMembershipOutlinedIcon from "@mui/icons-material/CardMembershipOutlined";
import notocoin from "./../assets/images/noto_coin.svg";
import fadiamond from "./../assets/images/fa_diamond.svg";
import gridiconsmultipleusers from "./../assets/images/gridicons_multiple-users.svg";
import RankingTable from "./RankingTable";

const Leaderboard = () => {
  
  return (
    <>
      <div className="leaderboard" style={{ color: "#fff" }}>
        <div>
          <span>Leaderboard</span>
        </div>
        <div className="date">01.04.2024</div>
        <div className="refresh-time">
          Refresh in <span>3H 10M 41S</span>
        </div>
      </div>
      <div className="leaderboard-card">
        <div className="rank">
          <div className="card">
            <div className="profile">
              <div className="profile-image-container">
                <img src={avatar9} alt="profile" />
                <span className="circle">2</span>
              </div>
              <span>
                Brooklyn Williamson <br />{" "}
                <span style={{ color: "#7b7f84" }}>@bwill007</span>
              </span>
            </div>
            <div className="score">
              <div className="wins">
                <span style={{ color: "#7b7f84" }}>WINS</span> <br />{" "}
                <span>12</span>
              </div>
              <div className="matches">
                <span style={{ color: "#7b7f84" }}>MATCHES</span> <br />{" "}
                <span>124</span>
              </div>
            </div>
            <div className="rewards">
              <div className="coins">
                <img src={notocoin} alt="notocoin" style={{ width: "25px" }} />{" "}
                <span>12</span>
              </div>
              <div className="coins">
                <img
                  src={fadiamond}
                  alt="fadiamond"
                  style={{ width: "25px" }}
                />{" "}
                <span>21</span>
              </div>
            </div>
          </div>
        </div>
        <div className="rank selected-card">
          <div className="card">
            <div className="profile">
              <div className="profile-image-container">
                <img src={avatar9} alt="profile" />
                <span className="circle">1</span>
              </div>
              <span>
                Brooklyn Williamson <br />{" "}
                <span style={{ color: "#7b7f84" }}>@bwill007</span>
              </span>
            </div>
            <div className="score">
              <div className="wins">
                <span style={{ color: "#7b7f84" }}>WINS</span> <br />{" "}
                <span>12</span>
              </div>
              <div className="matches">
                <span style={{ color: "#7b7f84" }}>MATCHES</span> <br />{" "}
                <span>124</span>
              </div>
            </div>
            <div className="rewards">
              <div className="coins">
                <img src={notocoin} alt="notocoin" style={{ width: "25px" }} />{" "}
                <span>12</span>
              </div>
              <div className="coins">
                <img
                  src={fadiamond}
                  alt="fadiamond"
                  style={{ width: "25px" }}
                />{" "}
                <span>21</span>
              </div>
            </div>
          </div>
        </div>
        <div className="rank">
          <div className="card">
            <div className="profile">
              <div className="profile-image-container">
                <img src={avatar9} alt="profile" />
                <span className="circle">3</span>
              </div>
              <span>
                Brooklyn Williamson <br />{" "}
                <span style={{ color: "#7b7f84" }}>@bwill007</span>
              </span>
            </div>
            <div className="score">
              <div className="wins">
                <span style={{ color: "#7b7f84" }}>WINS</span> <br />{" "}
                <span>12</span>
              </div>
              <div className="matches">
                <span style={{ color: "#7b7f84" }}>MATCHES</span> <br />{" "}
                <span>124</span>
              </div>
            </div>
            <div className="rewards">
              <div className="coins">
                <img src={notocoin} alt="notocoin" style={{ width: "25px" }} />{" "}
                <span>12</span>
              </div>
              <div className="coins">
                <img
                  src={fadiamond}
                  alt="fadiamond"
                  style={{ width: "25px" }}
                />{" "}
                <span>21</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="leaderboard-players">
        <div
          style={{
            backgroundColor: "#15202c",
            borderRadius: "50px",
            padding: "35px 55px",
          }}
        >
          <div className="player-count-container">
            <span
              style={{ color: "#fff", fontSize: "25px", fontWeight: "bold" }}
            >
              Players
            </span>
            <div className="player-count">
              <img
                style={{ width: "20px" }}
                src={gridiconsmultipleusers}
                alt="users"
              ></img>
              <span
                style={{ color: "rgb(123, 127, 132)", letterSpacing: "0px" }}
              >
                1200
              </span>
            </div>
          </div>
          <RankingTable />
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
