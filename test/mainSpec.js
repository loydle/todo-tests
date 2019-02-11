const fetch = require('node-fetch');
const assert = require('assert');


const getData = async (urlAsString) => {
  const resp = await fetch(urlAsString);
  return resp.json();
};

describe('fetch data promise', () => {
  it('should resolve', async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const data = await getData(url);
    assert.equal(data.length, 200, 'data length equal 200');
  });
  // it('data is fetched', () => {

  // });
});
