import {returnsBoolean} from "./sectionConfigs/returnsBoolean";
import {useWithRegex} from "./sectionConfigs/useWithRegex";
import {modifyStrings} from "./sectionConfigs/modifyStrings";
import {combineStrings} from "./sectionConfigs/combineStrings";
import {extractStrings} from "./sectionConfigs/extractString";

export const config = {
    title: 'String Methods',
    categories: [
        modifyStrings,
        extractStrings,
        useWithRegex,
        returnsBoolean,
        combineStrings
    ]
}