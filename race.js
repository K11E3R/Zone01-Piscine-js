async function race(promises = []) {
    if (promises.length === 0) {
        await new Promise(resolve => setTimeout(resolve, 10000));
    }
    return Promise.race(promises);
}

async function some(promises, count) {
    if (promises.length === 0 || count === 0) {
        return Promise.resolve([]);
    }

    const results = await Promise.allSettled(promises);
    return results
        .filter(result => result.status === 'fulfilled')
        .map(result => result.value)
        .slice(0, count);
}
