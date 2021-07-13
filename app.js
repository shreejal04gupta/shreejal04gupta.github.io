fetch("https://api.github.com/users/shreejal04gupta")
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);

    let followersCount = data["following"];
    let followersInfo = `I have been followed by ${followersCount} people.`;
    document.getElementById("profileImage").src = data["avatar_url"];
    document.getElementById("fullName").textContent = data["login"];
    document.getElementById("bio").textContent = data["bio"];
    document.getElementById("followersInfo").textContent = followersInfo;
    document.getElementById("githubLink").href = data["html_url"];
    document.getElementById("mainContainer").hidden = false;
    document.getElementById("loading").hidden = true;
    document.getElementById("repos").href = data["repos_url"];
  });
