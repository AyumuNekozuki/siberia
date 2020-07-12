(function () {
  'use strict';

  // 変数
  var wrap = document.getElementById('main'),
    elements = document.querySelectorAll('section'), // 1画面分スクロールさせる要素
    elRect = [],
    elTop = [],
    count = 0,
    wheelFlag = false;

  // 要素位置取得
  function getElTop() {
    for (var i = 0; i < elements.length; i++) {
      elRect.push(elements[i].getBoundingClientRect());
    }
    for (var i = 0; i < elRect.length; i++) {
      elTop.push(elRect[i].top + window.scrollY);
    }
  }
  getElTop();

  // 画面リサイズ処理
  window.addEventListener('resize', function () {
    elRect = [];
    elTop = [];
    getElTop();
    window.scrollTo(0, elTop[count]);
  });

  wrap.addEventListener('wheel', function (e) {
    e.preventDefault();
    if (!wheelFlag) {
      wheelFlag = true;
      if (e.deltaY > 0) {
        if (count >= elements.length - 1) {
          count = elements.length - 1;
        } else {
          count++;
        }
      } else if (e.deltaY < 0) {
        if (count <= 0) {
          count = 0;
        } else {
          count--;
        }
      }
      setTimeout(function () {
        wheelFlag = false;
      }, 800);
      setTimeout(function () {
        window.scrollTo({
          top: elTop[count],
          behavior: 'smooth',
        });
      }, 20);
    }
  });

  document.getElementById('to_top').onclick = function () {
    window.scrollTo({ // count番目の要素へスクロール
      top: elTop[0],
      behavior: 'smooth',
    });
  };
  document.getElementById('to_setting').onclick = function () {
    window.scrollTo({ // count番目の要素へスクロール
      top: elTop[1],
      behavior: 'smooth',
    });
  };

  document.getElementById('to_share').onclick = function () {
    window.scrollTo({ // count番目の要素へスクロール
      top: elTop[2],
      behavior: 'smooth',
    });
  };
}());