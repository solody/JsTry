const axios = require('axios').default;

// Make a request for a user with a given ID
axios.get('https://www.baidu.com')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });