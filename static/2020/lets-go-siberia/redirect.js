// カウントダウンする秒数
var sec = 7;
 
// 開始日時を設定
var dt = new Date();
var endDt = new Date(dt.getTime() + sec * 1000);

// 1秒おきにカウントダウン
var cnt = sec;
var id = setInterval(function(){
  cnt--;
  document.getElementById("count").innerHTML = cnt;
  dt = new Date();
  if(dt.getTime() >= endDt.getTime()){
    clearInterval(id);

    location.href = "https://www.google.co.jp/maps/place/ロシア+シベリア/@52.2869741,104.3050183,3a,75y/data=!3m8!1e2!3m6!1sAF1QipMH4kA87J5_xoCWls6fvz3y039Uia3WZ8oGxdl4!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMH4kA87J5_xoCWls6fvz3y039Uia3WZ8oGxdl4%3Dw114-h86-k-no!7i1920!8i1439!4m5!3m4!1s0x5c87ebbaf5e77a3b:0x2c4412982b67464c!8m2!3d61.0137097!4d99.1966559";
    
  //  location.href = "https://live.nicovideo.jp/watch/lv331272065";

  }
}, 1000)