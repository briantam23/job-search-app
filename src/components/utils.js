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