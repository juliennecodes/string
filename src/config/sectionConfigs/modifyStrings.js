import {createRowData} from "../../helpers";

const normalize = createRowData(
    'normalize',
    'String.normalize(?form)',
    {string: '\\u0066\\u0069\\u0067', method: 'normalize'},
    [
        `The normalize() method of String values returns the Unicode Normalization Form of this string.`
    ],
    [
    ]
);

const padEnd = createRowData(
    'pad-end',
    `'String.padEnd(maxLength, fillString)'`,
    {string: 'cherries', method: 'padEnd', exampleArguments: [`100`,`'fig'`]},
    [
        `The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string.`
    ],
    []
);

const padStart = createRowData(
    'pad-start',
    `'String.padStart(maxLength, fillString)'`,
    {string: 'cherries', method: 'padStart', exampleArguments: [`100`,`'fig'`]},
    [
        `The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of this string.`
    ],
    []
);

const repeat = createRowData(
    'repeat',
    'String.repeat(count)',
    {string: 'apples', method: 'repeat', exampleArguments: [`3`]},
    [
        `The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.`
    ],
    []
);


const toLowerCase = createRowData(
    'to-lower-case',
    'String.toLowerCase()',
    {string: 'APPLES BANANAS CHERRIES', method: 'toLowerCase'},
    [
        `The toLowerCase() method returns the calling string value converted to lower case.`
    ],
    []
);

const toUpperCase = createRowData(
    'to-upper-case',
    'String.toUpperCase()',
    {string: 'apples bananas cherries', method: 'toUpperCase'},
    [
        `The toUpperCase() method returns the calling string value converted to upper case.`
    ],
    []
);

const trim = createRowData(
    'trim',
    'String.trim()',
    {string: '  apples bananas cherries  ', method: 'trim'},
    [
        `The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.`
    ],
    []
);

const trimEnd = createRowData(
    'trim-end',
    'String.trimEnd()',
    {string: '  apples bananas cherries  ', method: 'trimEnd'},
    [
        `The trimEnd() method removes whitespace from the end of a string and returns a new string, without modifying the original string.`
    ],
    []
);

const trimStart = createRowData(
    'trim-start',
    'String.trimStart()',
    {string: '  apples bananas cherries  ', method: 'trimStart'},
    [
        `The trimStart() method removes whitespace from the beginning of a string and returns a new string, without modifying the original string.`
    ],
    []
);

export const modifyStrings = {
    heading: 'Modify Strings',
    tableContents: [
        normalize,
        padStart,
        padEnd,
        repeat,
        toUpperCase,
        toLowerCase,
        trimStart,
        trimEnd,
        trim
    ]
}