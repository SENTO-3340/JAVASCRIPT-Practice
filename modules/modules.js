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
    nav.classList.remove('is-active');
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
  const windowHeight = window.innerHeight;
  const theScroll = document.querySelector('#the-scroll');
  const container = document.querySelector('.scroll-container');
  const backVideo = document.querySelector('.background-video');
  const textSpace = document.querySelector('.text-space');
  const innerText = document.querySelectorAll('.inner-text');
  const containerTop = container.offsetTop;
  const containerHeight = container.offsetHeight;
  const canvasTop = textSpace.offsetTop;
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const rect2 = theScroll.getBoundingClientRect();
    const theScrollTop = rect2.bottom + scrollTop;
    if (
      scrollTop >= containerHeight + containerTop &&
      scrollTop <= theScrollTop - 200
    ) {
      backVideo.classList.add('visible');
    } else {
      backVideo.classList.remove('visible');
    }
    if (scrollTop >= canvasTop && scrollTop <= theScrollTop - 200) {
      textSpace.classList.add('visible');
    } else {
      textSpace.classList.remove('visible');
    }
    innerText.forEach((text) => {
      const rect = text.getBoundingClientRect();
      const innerTop = rect.top + window.scrollY;
      if (scrollTop + windowHeight >= innerTop) {
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
  const leftButton = document.querySelector('.left-button');
  const rightButton = document.querySelector('.right-button');
  const contentWidth = content[0].getBoundingClientRect().width;
  const totalCarousel = content.length;
  const realCarousel = totalCarousel - 2;
  let currentIndex = 1;

  contents.style.transform = `translateX(-${currentIndex * contentWidth}px)`;

  function moveToCarousel(index) {
    contents.style.transform = `translateX(-${index * 100}vw)`;
    contents.style.transition = `1s`;

    contents.addEventListener(
      'transitionend',
      () => {
        if (index === 0) {
          currentIndex = realCarousel;
          contents.style.transform = `translateX(-${
            currentIndex * 100
          }vw)`;
          contents.style.transition = `none`;
        } else if ((index === totalCarousel - 1)) {
          currentIndex = 1;
          contents.style.transform = `translateX(-${
            currentIndex * 100
          }vw)`;
          contents.style.transition = `none`;
        }
      },
      { once: true }
    );
  }

  function prevCarousel() {
    currentIndex--;
    moveToCarousel(currentIndex);
  }
  function nextCarousel() {
    currentIndex++;
    moveToCarousel(currentIndex);
  }

  setInterval(nextCarousel,5000);

  leftButton.addEventListener('click', prevCarousel);
  rightButton.addEventListener('click', nextCarousel);
};
