const forEach = (array, action) => {
  if (Array.isArray(array)) {
    array.forEach((item, i) => action(item, i, array));
  }
};
