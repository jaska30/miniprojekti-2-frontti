var appURL = "http://localhost:3000/users/"
var picURL = "http://localhost:3000/users/pics/"
var axios = require('axios');

function getUsers() {
    return axios.get(appURL)
}

function addUsers(savescore) {
    console.log(savescore)
    return axios.post(appURL, savescore)
}

function getPics() {
    return axios.get(picURL)
}

export { getUsers, addUsers, getPics };