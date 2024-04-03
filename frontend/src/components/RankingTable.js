import "./../assets/css/RankingTable.css";
import avatar9 from "./../assets/images/avatar9.png";
import fxemojitrophy from "./../assets/images/fxemoji_trophy.svg";
import pepiconsprintsword from "./../assets/images/pepicons-print_sword.svg";

const RankingTable = () => {
  const data = [
    { rank: 4, name: "Anom", wins: 8746, matches: 13657 },
    { rank: 5, name: "Megha", wins: 7910, matches: 11142 },
    { rank: 6, name: "Subham", wins: 1354, matches: 14852 },
    { rank: 7, name: "Prateek", wins: 1341, matches: 12462 },
    { rank: 8, name: "Aditya", wins: 798, matches: 12794 },
    { rank: 9, name: "Ajay", wins: 746, matches: 12462 },
    { rank: 10, name: "Somya", wins: 546, matches: 12548 },
  ];

  return (
    <div>
      <table className="table">
        <tr>
          <th>Rank</th>
          <th>Player</th>
          <th>Wins</th>
          <th>Matches</th>
        </tr>
        {data.map((item) => (
          <tr>
            <td>
              <span>{item.rank}</span>
            </td>
            <td>
              <div style={{ display: "flex" }}>
                <img src={avatar9} alt="profile" />
                <span style={{ margin: "8px 0px 0px 15px" }}>{item.name}</span>
              </div>
            </td>
            <td>
              <div className="table-wins">
                <img src={fxemojitrophy} alt="profile" />
                <span style={{ padding: "6px" }}>{item.wins}</span>
              </div>
            </td>
            <td>
              <div className="table-wins">
                <img src={pepiconsprintsword} alt="profile" />
                <span style={{ padding: "6px" }}>{item.matches}</span>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default RankingTable;
