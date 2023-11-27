// sol 1

function blockChain(data, prev = { index: 0, hash: '0' }) {
  const index = prev.index + 1;
  const pr_hash = prev.hash;
  const string_data = JSON.stringify(data);
  const hash = hashCode(index +  pr_hash + string_data);

  const type_block = {
    index,
    hash,
    data,
    prev,
    chain: function (d) {
      return blockChain(d, type_block);
    },
  };

  return type_block;
}


//  sol 2 to fix

const blockChain_0 = (data, prev = { index: 0, hash: '0' }) => ({
  index: prev.index + 1,
  hash: hashCode(prev.index + prev.hash + JSON.stringify(data)),
  data,
  prev,
  chain: newData => blockChain(newData, { index: prev.index + 1, hash: hashCode(prev.index + prev.hash + JSON.stringify(data)) }),
});
