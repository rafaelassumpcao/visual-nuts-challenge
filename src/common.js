export const ifThenElse = (ifClause, thenClause, elseClause) => {
    return () =>
        ifClause
            ? thenClause()
            : elseClause()
};

export const isDivisibleBy = d => n => n % d === 0;

export function* range(end, start = 1) {
    if (!end) throw new Error('No limit to produce a range defined')
    for (let i = start; i <= end; i++) {
        yield i;
    }
    return null
};