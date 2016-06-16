var apiKey = require("./../.env").apiKey;

exports.Github = function(){
};


 // API Call starter code //
exports.Github.prototype.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){

// Shows user avatar //
    $("#result").html("<b>" + userName + "</b> <br>" + "<img class='profilePhoto' src=" + response.avatar_url + ">");
  });

// Shows repositories //
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    response.forEach(function(repo) {
      $(".repositories").prepend(repo.name + "<br>" + repo.description);
    });

  });
};
