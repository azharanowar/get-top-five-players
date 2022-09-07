document.getElementById("playersCard").addEventListener('click', function(event) {
    addNewPlayerToList(event);
});

document.getElementById("playersListShow").addEventListener('click', function(event) {
    removePlayerToList(event);
});

document.getElementById("perPlayerCostInputField").addEventListener('keyup', function() {
    inputFieldValidationById("perPlayerCostInputField", "calculateBtn");
});

let playerTotalExpenses;
document.getElementById("calculateBtn").addEventListener('click', function() {
    inputFieldValidationById("perPlayerCostInputField", "calculateBtn");
    playerTotalExpensesCalculation()

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

        if ( document.getElementById("playersListShow").childElementCount > 0 ) {
            buttonDisable( "calculateBtn", false );
        } else {
            buttonDisable( "calculateBtn", true );
        }
        
    }
}

function removePlayerToList(event) {
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
        
        if ( document.getElementById("playersListShow").childElementCount > 0 ) {
            buttonDisable( "calculateBtn", false );
        } else {
            buttonDisable( "calculateBtn", true )
        }
    }
}

function inputFieldValidationById( inputFieldId, submitBtnId ) {
    const inputFieldValue = document.getElementById( inputFieldId ).value;

    if ( inputFieldValue === "" ) {
        alert("Input field can't be empty!!!");
        return false;
    } else if ( isNaN( inputFieldValue ) || inputFieldValue < 0 ) {
        alert("Input field most be a positive number!!!");
        return false;
    } else {
        // All condition passed, that's mean input field is valid
        
        return inputFieldValue;
    }

}

function buttonDisable( buttonId, disable ) {
    if ( disable ) {
        document.getElementById( buttonId ).disabled = true;
    } else {
        document.getElementById( buttonId ).disabled = false;
    }
}

function playerTotalExpensesCalculation() {
    const perPlayerCost = parseFloat( document.getElementById("perPlayerCostInputField").value );
    const numberOfPlayerSelected = document.getElementById("playersListShow").childElementCount;
    
    if ( perPlayerCost && numberOfPlayerSelected ) {
        playerTotalExpenses = perPlayerCost * numberOfPlayerSelected;
        return document.getElementById("playerTotalExpenses").innerText = playerTotalExpenses;
    }
}