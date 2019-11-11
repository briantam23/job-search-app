export const searchKeywords = (keywords, jobs) => (
    keywords !== ""
        ? jobs.filter(job => Object.values(job).find(value => (
                typeof value === 'string'
                    ? value.toLowerCase().includes(keywords)
                    // else if array
                    : value.some(valueEl => valueEl.toLowerCase().includes(keywords))
            ))
        )
        : jobs
)
export const searchFilter = (queryParamArr, jobs) => {
    const dataType = queryParamArr[1];
    const value = queryParamArr[2];

    return jobs.filter(job => {
            if(!job[dataType]) return false;
            return typeof job[dataType] === 'string'
                ? job[dataType] === value
                : job[dataType].some(el => el === value)
    })
}

export const filters = ['Locations', 'Interests', 'Industries', 'Functions'];
export const findDataType = filter => {
    if(filter === 'Locations') return 'continents';
    else if(filter === 'Interests') return 'interestCategory';
    else if(filter === 'Industries') return 'industries';
    else return 'functions';
}
export const findFilteredItems = (jobs, dataType) => {
    const listSet = new Set();

    jobs.forEach(job => {
        if(!job[dataType]) return;
        typeof job[dataType] === 'string'
            ? listSet.add(job[dataType])
            // else if array
            : job[dataType].forEach(el => listSet.add(el))
    })
    return [...listSet].slice(0, 5);
}
