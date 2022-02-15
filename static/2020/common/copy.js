document.getElementById('copy').addEventListener("click", copyToClipboard);

function copyToClipboard() {
  document.querySelector("#sharebox").disabled = false;

  var copyTarget = document.querySelector("#sharebox");
  copyTarget.select();
  document.execCommand("Copy");

  document.querySelector("#sharebox").disabled = true;

  document.querySelector("#copy").innerHTML = "Copied!"
  window.setTimeout( 'backcopy()', 1250);
}

function backcopy(){
  document.querySelector("#copy").innerHTML = "Copy"
}