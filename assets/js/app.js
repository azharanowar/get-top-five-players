document.getElementById("playersCard").addEventListener('click', function(event) {
    playersList(event);
});

function playersList(event) {
    const isSelectBtnClicked = event.target.classList.contains("select-btn");
    const totalPlayersAdded = document.getElementById("playersListShow").childNodes.length;
    if (isSelectBtnClicked) {
        if (totalPlayersAdded < 5) {
            const getPlayerName = event.target.parentNode.childNodes[1].innerText;
            const newPlayerListTag = document.createElement('li');
            newPlayerListTag.innerHTML = "<span>" + getPlayerName + "</span>";
            document.getElementById("playersListShow").appendChild(newPlayerListTag);
            event.target.innerText = "Selected";
            event.target.disabled = true;
        } else {
            alert("You've already added 5 players. To add a new player you have to remove a player from selected lists!!!");
        }
        
    }
}