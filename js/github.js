var apiKey = require("./../.env").apiKey;

exports.Github = function(){
};

 // API Call starter code //
exports.Github.prototype.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){

// Show results. Prepend user name + user photo //
    $("#result").prepend("<b>" + userName + "</b><br>" + "<img class='profilePhoto' src=" + response.avatar_url + ">");
  });
};
