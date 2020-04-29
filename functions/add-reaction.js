const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { id, type } = JSON.parse(event.body);
  const response = await fetch('http://165.227.20.29/reactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      type,
      corgi: id,
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
