document.getElementById("to_share").onclick = function () {
  var input_twiID = document.getElementById("twitterid").value;
  if (input_twiID != "") {
    input_twiID = "@" + input_twiID + " ";
  }

  //ネット超会議仕様設定
  var today = new Date(2020, 8, 9, 16, 00, 00);
  var netchokaigi_summer_start = new Date(2020, 8, 9, 16, 00, 00);
  var netchokaigi_summer_finish = new Date(2020, 8, 16, 23, 00, 00);
  var result = "";
  var resultw = "";


  if (today.getTime() <= netchokaigi_summer_finish.getTime()) {
    result = input_twiID + "お前は #シベリア送り だ！ #ネット超会議2020夏 #ユーザー企画 https://siberia.nekozuki.me/lets-go-siberia";
    resultw = "https://twitter.com/intent/tweet?text=" + input_twiID + "お前は%20%23シベリア送り%20だ！%20%23ネット超会議2020夏%20%23ユーザー企画%20&url=https%3A%2F%2Fsiberia.nekozuki.me%2Flets-go-siberia";
  } else {
    result = input_twiID + "お前は #シベリア送り だ！https://siberia.nekozuki.me/lets-go-siberia";
    resultw = "https://twitter.com/intent/tweet?text=" + input_twiID + "お前は%20%23シベリア送り%20だ！&url=https%3A%2F%2Fsiberia.nekozuki.me%2Flets-go-siberia";
  }

  document.getElementById("sharebox").innerHTML = result;
  document.getElementById("tw_sharebut").href = resultw;

  document.getElementById("to_share_next").click();
}

