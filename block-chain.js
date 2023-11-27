function blockChain(data, prev = { index: 0, hash: '0' }) {
  const index = prev.index + 1;
  const prevHash = prev.hash;
  const dataString = JSON.stringify(data);
  const hash = hashCode(index + prevHash + dataString);

  const newBlock = {
    index,
    hash,
    data,
    prev,
    chain: function (newData) {
      return blockChain(newData, newBlock);
    },
  };

  return newBlock;
}
