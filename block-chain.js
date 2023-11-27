// sol 1

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


//  sol 2 to fix

// const blockChain = (data, prev = { index: 0, hash: '0' }) => ({
//   index: prev.index + 1,
//   hash: hashCode(prev.index + prev.hash + JSON.stringify(data)),
//   data,
//   prev,
//   chain: newData => blockChain(newData, { index: prev.index + 1, hash: hashCode(prev.index + prev.hash + JSON.stringify(data)) }),
// });
