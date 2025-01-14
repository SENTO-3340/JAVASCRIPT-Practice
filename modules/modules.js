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
    if (scaleIndex < 1.5) {
      scaleIndex = scaleIndex + 0.2;
      updateTransform();
    } else {
      alert('ボタンが隠れちゃうよ');
    }
  });
  // smallボタン イベント処理のロジック
  button.small.addEventListener('click', () => {
    if (scaleIndex > 0.5) {
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
  const contents = document.querySelector('.carousel-contents');
  const content = document.querySelectorAll('.carousel-content');
  const contentWidth = content[0].getBoundingClientRect().width;
  const totalCarousel = content.length;
  const realCarousel = totalCarousel - 2;
  
  let currentIndex = 1;

  contents.style.transform = `translateX(-${currentIndex * contentWidth}px)`;

　function moveToCarousel(index) {
    contents.style.transform = `translateX(-${index * contentWidth}px)`;
    contents.style.transition = `4s`;
    
    contents.addEventListener(
      'transitionend',
      () => {
        if (index === 0) {
          currentIndex = realCarousel;
          contents.style.transition = `none`;
          contents.style.transform = `translateX(-${currentIndex * contentWidth}px)`;
        } else if (index === totalCarousel - 1) {
          currentIndex = 1;
          contents.style.transition = `none`;
          contents.style.transform = `translateX(-${currentIndex * contentWidth}px)`;
        }
      },
      { once: true }
    );
  }
  setInterval(nextCarousel, 5000);

　const leftButton = document.querySelector('.left-button');
　const rightButton = document.querySelector('.right-button');

  function prevCarousel() {
    currentIndex--;
    moveToCarousel(currentIndex);
  }
  function nextCarousel() {
    currentIndex++;
    moveToCarousel(currentIndex);
  }

  leftButton.addEventListener('click', prevCarousel);
  rightButton.addEventListener('click', nextCarousel);
};
