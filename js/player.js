const players = []
function addPlayer (player){
    if(players.length <= 4){
        const playerName = player.parentNode.parentNode.children[0].innerText;

    const playerObj = {
        playerName : playerName
    }
    players.push(playerObj);
    document.getElementById('total-player').innerText = players.length
    player.disabled = true;
    display(players);
    }
    else{
        alert('You have select only five players.')
    }
}

function display(namePlayers){
    const tableBody = document.getElementById('player-name');
    tableBody.innerHTML ='';
    console.log(namePlayers);
    for(let play of namePlayers){
        const tr = document.createElement('tr')
        tr.innerHTML = `
           <tr>${play.playerName}</tr>
        `;
        tableBody.appendChild(tr);
    }
    
}