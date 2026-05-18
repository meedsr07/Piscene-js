async function isWinner(countryName) {
    try {
        const country = await db.getWinner(countryName)
        if (country.continent !== 'Europe') {
            return country.name + " is not what we are looking for because of the continent"
        }
        const wins = await db.getResults(country.id)
        if (wins.length < 3) {
            return country.name + " is not what we are looking for because of the number of times it was champion"
        }
        const years = wins.map((win) => win.year).join(', ')
        const score = wins.map((result) => result.score).join(', ')

        return country.name + " won the FIFA World Cup in " + years + " winning by " + score

    } catch (err) {
        return countryName + " never was a winner"
    }
}