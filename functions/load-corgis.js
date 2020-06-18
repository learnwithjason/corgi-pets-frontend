const fetch = require('node-fetch');

exports.handler = async () => {
  const response = await fetch('http://167.99.163.11/corgis')
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
