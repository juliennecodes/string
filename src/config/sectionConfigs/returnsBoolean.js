import {createRowData} from "../../helpers";

const includes = createRowData(
    'includes',
    'String.includes(searchString, ?position)',
    {string: 'apples bananas cherries', method: 'includes', exampleArguments: [`'apples'`]},
    [
        `The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.`
    ],
    []
);

const startsWith = createRowData(
    'starts-with',
    'String.startsWith(searchString, ?position)',
    {string: 'apples bananas cherries', method: 'startsWith', exampleArguments: [`'apples'`]},
    [
        `The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.`
    ],
    []
);

const endsWith = createRowData(
    'ends-with',
    'String.endsWith(searchString, ?position)',
    {string: 'apples bananas cherries', method: 'endsWith', exampleArguments: [`'cherries'`]},
    [
        `The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.`
    ],
    []
);

export const returnsBoolean = {
    heading: 'Returns Boolean',
    tableContents: [
        includes,
        startsWith,
        endsWith
    ]
}