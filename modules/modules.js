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

// －－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

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
  button.text.addEventListener('click', ()=> {
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
    if (scaleIndex < 1.6) {
      scaleIndex = scaleIndex + 0.2;
      updateTransform();
    } else {
      alert('ボタンが隠れちゃうよ');
    }
  });
  // smallボタン イベント処理のロジック
  button.small.addEventListener('click', () => {
    if (scaleIndex > 0.4) {
      scaleIndex = scaleIndex - 0.2;
      updateTransform();
    } else {
      alert('消えちゃうよ');
    }
  });
  // rotateボタン イベント処理のロジック
  button.rotate.addEventListener('click', () => {
    rotateIndex += 1080; // 回転角度を累積
    updateTransform();
  });

  // transformの状態を更新する関数
  function updateTransform() {
    iconImg.style.transform = `scale(${scaleIndex}) rotate(${rotateIndex}deg)`;
  }
};