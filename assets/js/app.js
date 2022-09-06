document.getElementById("playersCard").addEventListener('click', function( event ) {
    const isSelectBtnClicked = event.target.classList.contains("select-btn");
    if ( isSelectBtnClicked ) {
       const getPlayerName = event.target.parentNode.childNodes[1].innerText;
        console.log(getPlayerName)
    }
});
