function openForm(evt, formName) {
  let i, switchcontent, switchlinks;

  switchcontent = document.getElementsByClassName("switchcontent");
  for (i = 0; i < switchcontent.length; i++) {
    switchcontent[i].style.display = "none";
  }

  switchlinks = document.getElementsByClassName("switchlink");
  for (i = 0; i < switchlinks.length; i++) {
    switchlinks[i].className = switchlinks[i].className.replace(" active", "");
  }

  document.getElementById(formName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
