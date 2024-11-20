
axios.get('https://google.com')
  .then(res => res.data)
  .then(data => console.log(data))

// const makeGoogleRequest = () => {
//   return axios.get('https://google.com')
//     .then(res => res.data)
// }
// makeGoogleRequest().then(data => console.log(data))
