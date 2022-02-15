document.getElementById("to_share").onclick = function () {
  var input_twiID = document.getElementById("twitterid").value;
  if (input_twiID != "") {
    input_twiID = "@" + input_twiID + " ";
  }


  result = input_twiID + "お前は #シベリア送り だ！https://siberia.nekozuki.me/lets-go-siberia";
  resultw = "https://twitter.com/intent/tweet?text=" + input_twiID + "お前は%20%23シベリア送り%20だ！&url=https%3A%2F%2Fsiberia.nekozuki.me%2Flets-go-siberia";

  document.getElementById("sharebox").innerHTML = result;
  document.getElementById("tw_sharebut").href = resultw;

  document.getElementById("to_share_next").click();
}

