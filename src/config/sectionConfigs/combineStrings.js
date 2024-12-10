import {createRowData} from "../../helpers";

const concat = createRowData(
    'concat',
    'String.concat(...strings)',
    {string: 'apples bananas cherries', method: 'concat', exampleArguments: [`'dragonfruit'`, `'fig'`]},
    [
        `The concat() method of String values concatenates the string arguments to this string and returns a new string.`
    ],
    []
);

export const combineStrings = {
    heading: 'Combine Strings',
    tableContents: [
        concat
    ]
}