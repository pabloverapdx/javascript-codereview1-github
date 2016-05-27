var apiKey = require("./../.env").apiKey;

exports.Github = function(){
};

exports.Github.prototype.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){


    $("#result").text("You searched for " + userName);
  });
};
