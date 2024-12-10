import {Box} from "@mui/material";
import {copyContent} from "../../helpers";
import TableCell from "@mui/material/TableCell";
import {NoMaxWidthTooltip} from "../common/NoMaxWidthTooltip";
import * as React from "react";
import {EmptyTableCell} from "../common/EmptyTableCell";
import {Preformatted} from "../common/Preformatted";

const formatArguments = (exampleArguments) => {
    return exampleArguments.reduce((acc, a) => {
        return `${acc}, ${a}`;
    });
}
const ExampleContent = ({example}) => {
    const {string, method, exampleArguments} = example;
    const args = exampleArguments ? formatArguments(exampleArguments): '';
    const content = `'${string}'.${method}(${args})`;
    return (
        <Box
            sx={{cursor: 'pointer'}}
            onClick={() => copyContent(content)}
        >
            <Preformatted>
                <code>
                    <span className='stringSegment'>{`'${string}'`}</span>
                    <span className='method'>{`.${method}`}</span>
                    <span className='arguments'>{`(${args})`}</span>
                </code>
            </Preformatted>
        </Box>);
}

export const Example = ({name, example, explanation}) => {
    const hasExplanation = explanation.length > 0
    const explanationContent =
        <Box>
            {explanation.map((line, index) => (<Preformatted key={`${name}-explanation-${index}`} >{line}</Preformatted>))}
        </Box>

    return example ? (
        <TableCell width={400}>
            {hasExplanation ? (
                    <NoMaxWidthTooltip title={explanationContent}>
                        <Box>
                            <ExampleContent example={example}/>
                        </Box>
                    </NoMaxWidthTooltip>) :
                <ExampleContent example={example}/>
            }
        </TableCell>) :
        <EmptyTableCell />
}