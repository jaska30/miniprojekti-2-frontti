var appURL = "http://localhost:3000/users/"
var picURL = "http://localhost:3000/users/pics/"
var axios = require('axios');


function getUsers() {
       return  axios.get(appURL)
       
}
function addUsers(nq) {
    console.log(nq)
    return axios.post(appURL,nq)
}
function getPics() {
    return  axios.get(picURL)
}
export {getUsers, addUsers, getPics};