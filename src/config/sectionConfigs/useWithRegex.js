import {createRowData} from "../../helpers";

const match = createRowData(
    'match',
    'String.match(regex)',
    {string: 'apples bananas cherries', method: 'match', exampleArguments: [`/bananas/`]},
    [
        `The match() method of String values retrieves the result of matching this string against a regular expression.`
    ],
    []
);

const matchAll = createRowData(
    'match-all',
    'String.matchAll(regex)',
    {string: 'apples bananas cherries bananas', method: 'matchAll', exampleArguments: [`/bananas/g`]},
    [
        `The matchAll() method of String values returns an iterator of all results matching this string against a regular expression, including capturing groups.`
    ],
    []
);

const replace = createRowData(
    'replace',
    'String.replace(searchValue, newValue)',
    {string: 'apples bananas cherries', method: 'replace', exampleArguments: [`'bananas'`, `'dragonfruit'`]},
    [
        `The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.`
    ],
    []
);

const replaceAll = createRowData(
    'replace-all',
    'String.replaceAll(searchValue, newValue)',
    {string: 'apples bananas cherries bananas', method: 'replaceAll', exampleArguments: [`'bananas'`, `'dragonfruit'`]},
    [
        `The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.`
    ],
    []
);

const search = createRowData(
    'search',
    'String.search(regexp)',
    {string: 'apples bananas cherries', method: 'search', exampleArguments: [`/bananas/`]},
    [
        `The search() method executes a search for a match between a regular expression and this String object.`
    ],
    []
);

const split = createRowData(
    'split',
    'String.split(separator, ?limit)',
    {string: 'apples bananas cherries', method: 'split', exampleArguments: [`' '`, `2`]},
    [
        `The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.`
    ],
    []
);

export const useWithRegex = {
    heading: 'Use with Regex',
    tableContents: [
        match,
        matchAll,
        replace,
        replaceAll,
        search,
        split
    ]
}