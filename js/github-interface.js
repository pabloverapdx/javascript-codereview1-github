var Github = require ("./../js/github.js").Github;

$(document).ready(function() {

var userObject = new Github ();



  $("#userFind").click(function(event){
    var userName = $("#userSearch").val();
    $(".repositories").html('');
    userObject.getRepos(userName);
    event.preventDefault();
  });
});
