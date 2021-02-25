const css = document.querySelector('#css');
const changeModeButton = document.querySelector('#changeMode')
const changeMode = () => {
    if (changeModeButton.innerHTML === 'Light mode'){
        css.href = "darkmode.css";
        changeModeButton.innerHTML = "Dark mode";
    }
    else {
        css.href = "style.css";
        changeModeButton.innerHTML = "Light mode";
    }
}

changeModeButton.addEventListener("click", changeMode)