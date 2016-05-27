var Github = require ("./../js/github.js").Github;

$(document).ready(function() {

var userObject = new Github ();



  $("#userFind").click(function(event){
    event.preventDefault();
    var userName = $("#userSearch").val();
    $("#userSearch").val("");
    var user = userObject.getRepos(userName);
  });
});
