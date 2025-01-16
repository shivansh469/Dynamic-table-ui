import React, { useState } from "react";
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  Switch,
  FormControlLabel,
} from "@mui/material";
import {
  Add,
  Delete,
  FilterAlt,
  Sort,
  TableRows,
  ArrowBack,
  Download,
  Share,
} from "@mui/icons-material";

function App() {
  const [rows, setRows] = useState([
    {
      id: 1,
      input: "Oct 12, 2024 at 14:08 PM",
      action: "Bitscale Evaluation",
      enrich: "Bitscale Evaluation - Account relevance",
    },
    {
      id: 2,
      input: "Oct 12, 2024 at 14:08 PM",
      action: "cell data size exceeds limit",
      enrich: "BMW Evaluation - Relevancy check",
    },
    {
      id: 3,
      input: "Oct 12, 2024 at 14:08 PM",
      action: "https://www.linkedin.com/bit",
      enrich: "Google Evaluation - Lilevancy check",
    },
    {
      id: 4,
      input: "Oct 12, 2024 at 14:08 PM",
      action: "Loading data, Please wait",
      enrich: "Apple Evaluation - Olivancy check",
    },
    {
      id: 5,
      input: "Oct 12, 2024 at 14:08 PM",
      action: "Loading data, Please wait",
      enrich: "Figma Evaluation - Evancy check",
    },
  ]);

  const [columns, setColumns] = useState([
    { id: "input", label: "Input Column" },
    { id: "action", label: "Action Column" },
    { id: "enrich", label: "Enrich Company" },
  ]);

  const [autoSave, setAutoSave] = useState(false);

  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      input: "New Input Data",
      action: "New Action Data",
      enrich: "New Enrich Data",
    };
    setRows([...rows, newRow]);
  };

  const handleDeleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleDeleteAll = () => {
    setRows([]);
  };

  const handleAddColumn = () => {
    const newColumnId = `newColumn${columns.length + 1}`;
    const newColumn = { id: newColumnId, label: `New Column ${columns.length + 1}` };
    setColumns([...columns, newColumn]);

    const updatedRows = rows.map((row) => ({
      ...row,
      [newColumnId]: "New Data",
    }));
    setRows(updatedRows);
  };

  const toggleAutoSave = (event) => {
    setAutoSave(event.target.checked);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Header Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#f8f8f8",
          padding: "10px 20px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBack />}
          style={{ textTransform: "none" }}
        >
          Back
        </Button>
        <h3>Name of the file</h3>
        <TextField
          size="small"
          placeholder="Search"
          style={{ width: "300px" }}
        />
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Tooltip title="Delete All Rows">
            <IconButton color="error" onClick={handleDeleteAll}>
              <Delete />
            </IconButton>
          </Tooltip>
          <Tooltip title="Row/Column">
            <IconButton>
              <TableRows />
            </IconButton>
          </Tooltip>
          <Tooltip title="Filter">
            <IconButton>
              <FilterAlt />
            </IconButton>
          </Tooltip>
          <Tooltip title="Sort">
            <IconButton>
              <Sort />
            </IconButton>
          </Tooltip>
          <Tooltip title="Download">
            <IconButton>
              <Download />
            </IconButton>
          </Tooltip>
          <Tooltip title="Share">
            <IconButton>
              <Share />
            </IconButton>
          </Tooltip>
          <FormControlLabel
            control={<Switch checked={autoSave} onChange={toggleAutoSave} />}
            label="Auto Save"
          />
        </div>
      </div>

      {/* Table Section */}
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#f8f8f8" }}>
              <TableCell style={{ fontWeight: "bold" }}>#</TableCell>
              {columns.map((column) => (
                <TableCell key={column.id} style={{ fontWeight: "bold" }}>
                  {column.label}
                </TableCell>
              ))}
              <TableCell style={{ fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{index + 1}</TableCell>
                {columns.map((column) => (
                  <TableCell key={column.id}>{row[column.id]}</TableCell>
                ))}
                <TableCell>
                  <IconButton color="error" onClick={() => handleDeleteRow(row.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <Button
          variant="contained"
          color="success"
          startIcon={<Add />}
          onClick={handleAddRow}
        >
          Add Row
        </Button>
        <Button
          variant="contained"
          color="info"
          startIcon={<Add />}
          onClick={handleAddColumn}
        >
          Add Column
        </Button>
      </div>
    </div>
  );
}

export default App;
