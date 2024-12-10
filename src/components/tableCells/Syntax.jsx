import TableCell from "@mui/material/TableCell";
import {Typography} from "@mui/material";
import * as React from "react";

export const Syntax = ({syntax}) => {
    return (
        <TableCell component="th" scope="row" width={100}>
            <Typography sx={{fontSize: 16}}>{syntax}</Typography>
        </TableCell>);
}