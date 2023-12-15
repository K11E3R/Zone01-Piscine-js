async function getJSON(p = '', params = {}) {
    const url = `${p}?${new URLSearchParams(params)}`;
    const { ok, json, statusText } = await fetch(url);
    if (!ok) throw new Error(statusText);
    if (json.error) throw new Error(json.error);
    return json.data;
}
