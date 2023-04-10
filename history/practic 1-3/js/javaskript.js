function clock() {
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    field.font = "45px Electrolize";
    field.clearRect(0, 0, 250, 250)
    field.fillText(hour + ":" + min + ":" + sec, 10, 45);
}

function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function closeTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "block";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "none";
    evt.currentTarget.className += " active";
}

function closeAllTabs() {
    let tabButtons = document.getElementsByClassName("tablinks");
    let tabContent = document.getElementsByClassName("tab_content");

    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");

        tabContent[i].style.display = "none";
    }
}
function copyAll(textId) {
    let copyText = document.getElementById(textId);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}