import {createRowData} from "../../helpers";

const slice = createRowData(
    'slice',
    'String.slice(beginIndex, ?endIndex)',
    {string: 'apples bananas cherries', method: 'slice', exampleArguments: [`7`, `14`]},
    [
        `The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.`
    ],
    []
);

const substring = createRowData(
    'substring',
    'String.substring(indexStart, ?indexEnd)',
    {string: 'apples bananas cherries', method: 'substring', exampleArguments: [`7`, `14`]},
    [
        `The substring() method returns the part of the string between the start and end indexes, or to the end of the string.`
    ],
    []
);

export const extractStrings = {
    heading: 'Extract Strings',
    tableContents: [
        slice,
        substring
    ]
}