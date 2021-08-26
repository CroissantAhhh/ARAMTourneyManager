const PLAYERS = ["little pogchamp", "Giraffe", "DannyK", "DonnyK", "Correlate", "Samidare",
                 "gold gavel", "Justified Ego", "cutie cat", "Cute Asian Girl", "sena x",
                 "pobelter's cat", "YumYumMonster", "kNguyen", "Sticklad", "Pandacreator",
                 "McJesus", "SpazM", "FunkyDunky", "Lemao Zedong", "taylorclone", "Ayumi",
                 "Cemonic", "NaCl Tim"];

const interested = ["little pogchamp", "Giraffe", "DannyK", "DonnyK", "Correlate",
                    "gold gavel", "Justified Ego", "cutie cat", "Cute Asian Girl",
                    "YumYumMonster", "Sticklad",
                     "SpazM", "FunkyDunky", "Lemao Zedong", "taylorclone"];

function makeTeams() {
    let pool = interested;
    let blueTeam = [];
    let redTeam = [];

    let randomPlayers = new Set();
    while (randomPlayers.size < 10) {
        let randomNum = Math.floor(Math.random() * pool.length);
        if (!randomPlayers.has(randomNum)) {
            randomPlayers.add(randomNum);
        }
    }
    randomPlayers = Array.from(randomPlayers);
    for (let i = 0; i < 5; i++) {
        blueTeam.push(pool[randomPlayers.pop()]);
        redTeam.push(pool[randomPlayers.pop()]);
    }
    return [blueTeam, redTeam];
}

window.addEventListener("DOMContentLoaded", () => {

    document.getElementById("matchmake").addEventListener("click", () => {
        const teams = makeTeams();
        const blue = teams[0];
        const red = teams[1];

        const blueSide = document.getElementById("blue-members");
        const redSide = document.getElementById("red-members");

        if (blueSide.childElementCount) {
            blueSide.innerHTML = '';
        }
        if (redSide.childElementCount) {
            redSide.innerHTML = '';
        }

        for (let i = 0; i < 5; i++) {
            let blueLi = document.createElement("li");
            let redLi = document.createElement("li");
            blueLi.innerText = blue[i];
            redLi.innerText = red[i];
            blueSide.appendChild(blueLi);
            redSide.appendChild(redLi);
        }
    })
})
