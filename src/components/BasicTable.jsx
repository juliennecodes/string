import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Tooltip, Typography} from "@mui/material";
import {Example} from "./tableCells/Example";
import {ConsoleLog} from "./tableCells/ConsoleLog";
import {Syntax} from "./tableCells/Syntax";
import {Comment} from './tableCells/Comment';

export const BasicTable = ({heading, subheading, rows}) => {
    return (
        <div>
            <Tooltip title={subheading} placement='bottom-start'>
                <Typography variant="h5" component="h2" sx={{cursor: 'pointer'}} id={heading}>
                    {heading}
                </Typography>
            </Tooltip>
            <TableContainer component={Paper} sx={{width: 850}}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Syntax</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell></TableCell>
                            <TableCell>Log</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(({name, syntax, example, comment, explanation}) => (
                            <TableRow
                                key={name}
                                id={name}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <Syntax syntax={syntax}/>
                                <Example name={name} example={example} explanation={explanation}/>
                                <Comment name={name} comment={comment}/>
                                <ConsoleLog example={example}/>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
