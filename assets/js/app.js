document.getElementById("playersCard").addEventListener('click', function(event) {
    addNewPlayerToList(event);
});
document.getElementById("playersListShow").addEventListener('click', function(event) {
    removePlayerToList(event);
});

function addNewPlayerToList(event) {
    const isSelectBtnClicked = event.target.classList.contains("select-btn");
    if (isSelectBtnClicked) {
        const totalPlayersAdded = document.getElementById("playersListShow").childNodes.length;
        if (totalPlayersAdded < 5) {
            const getPlayerName = event.target.parentNode.childNodes[1].innerText;
            const newPlayerListTag = document.createElement('li');
            newPlayerListTag.innerHTML = "<span class='listed-player-name'>" + getPlayerName + "</span>" + "<span class='remove-player text-danger'>❌</span>";
            document.getElementById("playersListShow").appendChild(newPlayerListTag);
            event.target.innerText = "Selected";
            event.target.disabled = true;
        } else {
            alert("You've already added 5 players. To add a new player you have to remove one from selected lists!!!");
        }
        
    }
}

function removePlayerToList( event ) {
    const isRemovePlayerBtnClicked = event.target.classList.contains("remove-player");
    if ( isRemovePlayerBtnClicked ) {
        const removingPlayerListTag = event.target.parentNode;
        const removingPlayerName = removingPlayerListTag.firstChild.innerText;

        const cardPlayersName = document.querySelectorAll(".card-title");
        for ( const cardPlayeName of cardPlayersName  ) {
            if ( cardPlayeName.innerText === removingPlayerName ) {
                cardPlayeName.parentNode.lastElementChild.disabled = false;
                cardPlayeName.parentNode.lastElementChild.innerText = "Select";
            }
        }
        removingPlayerListTag.parentNode.removeChild(removingPlayerListTag);
        
    }
}