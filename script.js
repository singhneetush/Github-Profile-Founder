document.getElementById('submit').addEventListener('click', showProfile);

function showProfile() {
  let username = document.getElementById('userName').value;
  let url = 'https://api.github.com/users/' + username;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.message) {
        document.getElementById('profile').innerHTML = `
        <h3>Profile Not Found</h3>`;
      } else {
        /* console.log(data); */
        document.getElementById('profile').innerHTML = `
          <img src = "${data.avatar_url}
          style=" border-radius: 50%; background-color:"black";>
          <p class="new">${data.name}(${data.login})</p >
          <p class="new" >${data.bio} </p>
          
    `;
      }
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
}
