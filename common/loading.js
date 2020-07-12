/* loading */
var bg = document.getElementById("loader-bg"),
loader = document.getElementById("loader");
/* ローディング画面の非表示を解除 */
bg.classList.remove('is-hide');
loader.classList.remove('is-hide');

/* 読み込み完了 */
window.onload = window.setTimeout( 'stopload()', 900 );

/* 10秒経ったら強制的にローディング画面を非表示にする */
setTimeout('delay()',10000);

/* ローディング画面を非表示にする処理 */
function stopload(){
  bg.classList.add('fadeout');
  loader.classList.add('fadeout');
  window.setTimeout( 'disnone()', 775 );
}
function disnone(){
  bg.classList.add('is-hide');
  loader.classList.add('is-hide');
}