
var siteUser = [
  {uname : "user@gmail.com", password: "user"},
  {uname: "user1@gmail.com", password: "user1"},
  {uname: "user2@gmail.com", password: "user2"},
  {uname: "user3@gmail.com", password: "user3"},
  {uname: "user4@gmail.com", password: "user4"}
];
function logUser() {
var uname = document.getElementById('unm').value
var password = document.getElementById('pwd').value

for(var i = 0; i < siteUser.length; i++) {
if(uname == siteUser[i].uname && password ==  siteUser[i].password) {
  window.alert("User " +uname + " logged succesfully!")
  return
}
}
window.alert("Username or Password Incorrect, try again!")
}
