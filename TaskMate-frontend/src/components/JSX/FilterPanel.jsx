import React from "react";
import {
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { Clear } from "@mui/icons-material";

function FilterPanel({
  filterType,
  filterStatus,
  searchName,
  onFilterTypeChange,
  onFilterStatusChange,
  onSearchNameChange,
  onClearFilters,
}) {
  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 2, backgroundColor: "#fff", mt: 2 }}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="center">
        <FormControl sx={{ minWidth: 140 }}>
          <InputLabel>Type</InputLabel>
          <Select
            value={filterType}
            onChange={(e) => onFilterTypeChange(e.target.value)}
            sx={{ borderRadius: 2 }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="normal">Normal</MenuItem>
            <MenuItem value="urgent">Urgent</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 140 }}>
          <InputLabel>Status</InputLabel>
          <Select
            value={filterStatus}
            onChange={(e) => onFilterStatusChange(e.target.value)}
            sx={{ borderRadius: 2 }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="inprogress">In Progress</MenuItem>
            <MenuItem value="done">Done</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Search by Name"
          variant="outlined"
          value={searchName}
          onChange={(e) => onSearchNameChange(e.target.value)}
          sx={{ flexGrow: 1 }}
        />

        <Button
          variant="contained"
          color="secondary"
          startIcon={<Clear />}
          onClick={onClearFilters}
          sx={{ borderRadius: 2 }}
        >
          Clear
        </Button>
      </Stack>
    </Paper>
  );
}

export default FilterPanel;
