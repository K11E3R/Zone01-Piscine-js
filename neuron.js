function neuron(arr) {
    const res = { questions: {}, orders: {}, affirmations: {} };

    for (const item of arr) {
        const [type, key, response] = parseItem(item);

        res[type][key] ||= { [type.slice(0, -1)]: key.replaceAll(' ', '_'), responses: [] };
        res[type][key].responses.push(response);
    }

    return res;
}

function parseItem(arr) {
    const [type, ...rest] = arr.split(' ');
    const key = rest.join(' ').split('-')[0].slice(0, -1);
    const response = arr.includes('-') ? arr.split('-')[1].slice(1).split(' ').slice(1).join(' ') : '';

    return [type.toLowerCase() + 's', key.toLowerCase(), response];
}
