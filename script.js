// TODO: add code here
window.addEventListener("load", function() {
    // TODO: fetch planets JSON
    let URL = "https://handlers.education.launchcode.org/static/astronauts.json";
    fetch(URL).then(function(response) {
        // TODO: do something after fetching and receiving a response
        const jsonPromise = response.json();
        jsonPromise.then(function(json) {
            document.getElementById("header1").innerHTML += `: ${json.length}`;
            console.log(json);
            const container = document.getElementById('container');
            container.innerHTML = '';
            const sortedAstronauts = json.sort((a, b) => b.hoursInSpace > a.hoursInSpace ? 1 : -1);
            for (let astronaut of sortedAstronauts) {
                let greenClassIfActive = (astronaut.active === true) ? ` class="greenActive"` : "";
                container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li${greenClassIfActive}>Active: ${astronaut.active}</li>
                            <li>Skills: ${astronaut.skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${astronaut.picture}">
                </div>
                `;
            }
        });
    });
});
