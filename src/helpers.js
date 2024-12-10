export const createRowData = (name, syntax, example, explanation, comment) => {
    return { name, syntax, example, explanation, comment};
}

export const copyContent = (content) => {
    navigator.clipboard.writeText(content)
}