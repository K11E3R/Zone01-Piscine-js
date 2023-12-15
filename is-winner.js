async function isWinner(country) {
    try {
        const winner = await db.getWinner(country);
        
        if (winner === Error('Country Not Found')) {
            return `${country.name} never was a winner`;
        }

        if (winner.continent !== 'Europe') {
            return `${country.name} is not what we are looking for because of the continent`;
        }

        const results = await db.getResults(winner.id);
        
        if (results === Error('Results Not Found') || results.length < 3) {
            return `${country.name} never was a winner`;
        }

        const resultString = results.map(result => `${result.year} winning by ${result.score}`).join(', ');

        return `${country.name} won the FIFA World Cup in ${resultString}`;
    } catch (e) {
        if (e.message === 'Country Not Found') {
            return `${country} never was a winner`;
        }
    }
}
