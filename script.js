// TODO: add code here
window.addEventListener("load", function() {
    //TODO: fetch planets JSON
    let URL = "https://handlers.education.launchcode.org/static/astronauts.json";
    fetch(URL).then(function(response) {
        //  TODO: do something after fetching and receiving a response
        console.log(response);
        const jsonPromise = response.json();
        jsonPromise.then(function(json) {
            console.log(json);
            const container = document.getElementById('container');
            for (let astronaut of json) {
                container.innerHTML += `
                <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li>Active: ${astronaut.active}</li>
                        <li>Skills: ${astronaut.skils}</li>
                    </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}">
                </div>
                `;
            }
        });
    });
});

