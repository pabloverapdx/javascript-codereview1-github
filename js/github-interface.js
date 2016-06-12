var Github = require ("./../js/github.js").Github;

$(document).ready(function() {

var userObject = new Github ();



  $("#userFind").click(function(event){
    var userName = $("#userSearch").val();
    $("#userSearch").val("");
    userObject.getRepos(userName);
    event.preventDefault();
  });
});
