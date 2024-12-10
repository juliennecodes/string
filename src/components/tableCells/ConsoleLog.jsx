import TableCell from "@mui/material/TableCell";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import {copyContent} from "../../helpers";
import {EmptyTableCell} from "../common/EmptyTableCell";
import * as React from "react";

export const ConsoleLog = ({example}) => {
    const content = `'${example.string}'.${example.method}()`;

    return example ? (
        <TableCell><CircleRoundedIcon onClick={() => copyContent(content)} cursor='pointer'/></TableCell>
    ) : <EmptyTableCell/>
}