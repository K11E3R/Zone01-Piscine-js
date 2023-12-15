const queryServers = async (serverName, q) =>
  await Promise.race([getJSON(`/${serverName}?q=${q}`), getJSON(`/${serverName}_backup?q=${q}`)]);

const gougleSearch = async (q) => {
  const servers = ['web', 'image', 'video'];
  const timeoutPromise = new Promise((_, reject) => setTimeout(reject, 80, new Error('timeout')));
  const fastestServers = servers
    .map((serverName) => queryServers(serverName, q)) // (my_collector)
    .map(async (promise) => await Promise.race([promise, timeoutPromise]));

  const result = {};
  for (let i = 0; i < servers.length; i++) {
    result[servers[i]] = await fastestServers[i];
  }
  return result;
};
