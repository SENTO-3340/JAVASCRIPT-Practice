export const hum = () => {
  // 操作用DOM取得
  const nav = document.querySelector('.header-nav');
  const humButton = document.querySelector('.hum');
  const humGuide = document.querySelector('.hum-guide');
  // ハンバーガーメニューのロジック
  humButton.addEventListener('click', () => {
    humButton.classList.toggle('is-active');
    nav.classList.toggle('is-active');
    if (humGuide.textContent === 'open') {
      humGuide.textContent = 'close';
    } else {
      humGuide.textContent = 'open';
    }
  });
  // ナビのリンクをクリックしたらハンバーガーメニューを閉じるロジック
  nav.addEventListener('click', () => {
    humButton.classList.remove('is-active');
    nav.classList.remove('is-active');
    humGuide.textContent = 'open';
  });
};

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

export const icon = () => {
  //表示切替用DOM取得
  const iconImg = document.querySelector('.icon-img');
  const iconDes = document.querySelector('.icon-description');
  //ボタンDOM取得
  const button = {
    text: document.querySelector('.btn-text'),
    color: document.querySelector('.btn-color'),
    big: document.querySelector('.btn-big'),
    small: document.querySelector('.btn-small'),
    rotate: document.querySelector('.btn-rotate'),
  };
  // icon-descriptionに表示するテキスト
  const iconText = [
    'This is JavaScript icon!',
    'Wow!!',
    'Great!!!',
    'Amazing!!!!',
    'Oh my god!!!!!',
  ];
  // textボタン　イベント処理のロジック
  let textIndex = 0;
  iconDes.innerText = iconText[0];
  button.text.addEventListener('click', () => {
    textIndex = (textIndex + 1) % iconText.length;
    iconDes.innerText = iconText[textIndex];
  });
  // icon-descriptionの文字色
  const iconColor = ['#121212', 'gold', 'red', 'blue', 'green'];
  // colorボタン　イベント処理のロジック
  let colorIndex = 0;
  iconDes.style.color = iconColor[0];
  button.color.addEventListener('click', () => {
    colorIndex = (colorIndex + 1) % iconColor.length;
    iconDes.style.color = iconColor[colorIndex];
  });
  // big,smallボタンで動作するscale倍率の初期値
  let scaleIndex = 1;
  // rotateの初期値
  let rotateIndex = 0;
  // bigボタン イベント処理のロジック
  button.big.addEventListener('click', () => {
    if (scaleIndex <= 1.4) {
      scaleIndex = scaleIndex + 0.2;
      updateTransform();
    } else {
      alert('ボタンが隠れちゃうよ');
    }
  });
  // smallボタン イベント処理のロジック
  button.small.addEventListener('click', () => {
    if (scaleIndex >= 0.6) {
      scaleIndex = scaleIndex - 0.2;
      updateTransform();
    } else {
      alert('消えちゃうよ');
    }
  });
  // rotateボタン イベント処理のロジック
  button.rotate.addEventListener('click', () => {
    rotateIndex += 90; // 回転角度を累積
    updateTransform();
  });

  // transformの状態を更新する関数
  function updateTransform() {
    iconImg.style.transform = `scale(${scaleIndex}) rotate(${rotateIndex}deg)`;
  }
};
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

export const scroll = () => {
  // 操作用DOM取得
  const textSpace = document.querySelector('.text-space');
  const backVideo = document.querySelector('.background-video');
  const innerText = document.querySelectorAll('.inner-text');

  // 画面の高さ取得
  const windowHeight = window.innerHeight;

  window.addEventListener('scroll', () => {
    // text-space要素の上端と下端それぞれ画面上端の距離を動的に取得
    const textSpaceTop = textSpace.getBoundingClientRect().top;
    const textSpaceBottom = textSpace.getBoundingClientRect().bottom;

    //text-spaceとvideoをfade-inさせる区間を計算
    const fadeoutTiming = 100; //fade-outを早める数値（増やす＝早める）
    const fadeinSection = 0 >= textSpaceTop && textSpaceBottom >= fadeoutTiming;

    // 上記区間内でtext-spaceとvideoにクラスを追加
    if (fadeinSection) {
      textSpace.classList.add('visible');
      backVideo.classList.add('visible');
    } else {
      textSpace.classList.remove('visible');
      backVideo.classList.remove('visible');
    }

    // 全てのinner-textを配列にして、各々が画面に入ったらクラスを追加
    innerText.forEach((text) => {
      const textRect = text.getBoundingClientRect();
      if (windowHeight >= textRect.top) {
        text.classList.add('visible');
      } else {
        text.classList.remove('visible');
      }
    });
  });
};

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

export const carousel = () => {
  // 操作用DOM取得
  const contents = document.querySelector('.carousel-contents');
  const content = document.querySelectorAll('.carousel-content');

  // スライドするアイテムの横幅を取得
  const contentWidth = content[0].getBoundingClientRect().width;

  //carousel-contentの最初と最後の要素のクローン生成
  const firstClone = content[0].cloneNode(true);
  const lastClone = content[content.length - 1].cloneNode(true);

　//本物と見分けるためにクローンにidを付与
  firstClone.id = 'firstClone';
  lastClone.id = 'lastClone';

　//各クローンをcarousel-contetsの両端に追加
  contents.appendChild(firstClone);
  contents.insertBefore(lastClone, content[0]);

　//本物のcaronsel-contentのlengthを定数に代入
  const realContent = content.length - 2;

　//carouselの初期位置を管理
  let currentIndex = 1;

　//carouselを上記で指定した初期位置へ移動
  contents.style.transform = `translateX(-${currentIndex * contentWidth}px)`;

　//isTransitioningを定義し、moveToCarouselで
　//returnが実行されないように、値でfalseを代入
  let isTransitioning = false;

　//カルーセルをleftへ動かす関数
 //isTransitioning=trueであれば実行されない
  function moveToCarousel() {
    if (isTransitioning) return;
    isTrnsitioning = true;
    currentIndex++;
    contents.style.transform = `translateX(-${currentIndex * contentWidth}px)`;
    contents.style.transition = `2s`;
  }

  contents.addEventListener(
    'transitionend', 　//transitionが終わったタイミングで
    () => {
      isTransitioning = false; //isTransitioningをfalse(動作可能)にする
      
      //現在値がクローン要素であればクローン元の要素へ移動する
      if (content[currentIndex].id === 'lastClone') {
        currentIndex = realContent;
        contents.style.transition = `none`;
        contents.style.transform = `translateX(-${
          currentIndex * contentWidth
        }px)`;
      } else if (content[currentIndex].id === 'firstClone') {
        currentIndex = 1;
        contents.style.transition = `none`;
        contents.style.transform = `translateX(-${
          currentIndex * contentWidth
        }px)`;
      }
    }
  );

  function prevCarousel() {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex--;
    contents.style.transform = `translateX(${currentIndex * contentWidth}px)`;
    contents.style.transition = `2s`;
  }

  setInterval(moveToCarousel, 5000);

  const leftButton = document.querySelector('.left-button');
  const rightButton = document.querySelector('.right-button');

  leftButton.addEventListener('click', prevCarousel);
  rightButton.addEventListener('click', moveToCarousel);
};
