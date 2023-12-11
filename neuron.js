function neuron(arr) {
    const res = { questions: {}, orders: {}, affirmations: {} };

    for (const item of arr) {
        const [type, key, response] = parseItem(item);

        res[type][key] ||= { [type.slice(0, -1)]: key, responses: [] };
        res[type][key].responses.push(response);
    }

    return res;
}

function parseItem(item) {
    const [type, ...rest] = item.split(' ');
    const key = rest.join(' ').split('-')[0].slice(0, -1).replaceAll(' ', '_').toLowerCase();
    const response = item.includes('-') ? item.split('-')[1].slice(1).trim() : '';

    return [type.toLowerCase() + 's', key, response];
}