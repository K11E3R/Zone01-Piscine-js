async function series(arr) {
    return Promise.all(arr.map(item => item()));
}
