async function queryServers(serverName, q) {
    const url = `/${serverName}?q=${q}`;
    const backupUrl = `/${serverName}_backup?q=${q}`;
    const [res] = await Promise.race([getJSON(url), getJSON(backupUrl)]);
    return res;
}

async function gougleSearch(q) {
    const timeout = new Promise((resolve) => setTimeout(resolve, 80, Error('timeout')));
    const [web, image, video] = ['web', 'image', 'video'].map((server) => queryServers(server, q));
    const res = await Promise.race([timeout, Promise.all([web, image, video])]);
    if (res instanceof Error) throw res;
    return { image: res[1], video: res[2], web: res[0] };
}
