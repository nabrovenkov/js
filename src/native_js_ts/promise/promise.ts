axios.get('https://google.com')
  .then(res =>res.data)
  .then(data => console.log(data))