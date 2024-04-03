import React, { useState, useEffect } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { styled } from "@mui/material";

const columns = [
  { id: 'user', label: 'User', minWidth: 170 },
  { id: 'activity', label: 'Training', minWidth: 170 },
  { id: 'score', label: 'Score', minWidth: 100 },
  {
    id: 'started_at',
    label: 'Started',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'ended_at',
    label: 'Ended',
    minWidth: 170,
    align: 'right',
  },
];

const Leaderboard = () => {

  const [data, setData] = useState([]);
  const [activities, setActivities] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    fetch('http://localhost:8000/training/logs/')
      .then(res => res.json())
      .then(data => setData(data))

    fetch('http://localhost:8000/training/activities/')
      .then(res => res.json())
      .then(data => setActivities(data))
  },[])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: "white",
    },
    '&:nth-of-type(even)': {
      backgroundColor: "#F5F5F5",
    },
  }));

  const set = new Set();
  function isIncluded(value){
    if(set.has(value)){
      return false;
    }else{
      set.add(value);
      return true;
    }
  }
  return (
    <Paper sx={{ overflow: 'hidden', borderRadius: '15px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', height: '100%' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.index}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontFamily: 'Rubik', fontWeight: 'bold' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .sort(function(a, b){return b.score-a.score})
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{ fontFamily: 'Rubik'}}>
                          {(column.id === 'score' && isIncluded(row.activity) && set.size <= activities.length && page === 0) ? <div>{value}<EmojiEventsIcon sx={{verticalAlign: 'bottom', color: 'gold'}}/></div> : value}
                        </TableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default Leaderboard;