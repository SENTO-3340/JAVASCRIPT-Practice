export const hum = () => {
  // 操作用DOM取得
  const nav = document.querySelector('.header-nav');
  const humButton = document.querySelector('.hum');
  const humGuide = document.querySelector('.hum-guide');
  // ハンバーガーメニューの制御
  humButton.addEventListener('click', () => {
    humButton.classList.toggle('is-active');
    nav.classList.toggle('is-active');
    if (humGuide.textContent === 'open') {
      humGuide.textContent = 'close';
    } else {
      humGuide.textContent = 'open';
    }
  });
  // ナビのリンクをクリックしたらハンバーガーメニューを閉じる制御
  nav.addEventListener('click', () => {
    nav.classList.remove('is-active');
    nav.classList.remove('is-active');
    humGuide.textContent = 'open';
  });
};

export const icon = () => {
 //表示切替用DOM取得
 const iconImg = document.querySelector('.icon-img');
 const iconDes = document.querySelector('.icon-description');
 //ボタンDOM取得
 const button = {
  text:document.querySelector('1');
  color:document.querySelector('2');
  small:document.querySelector('3');
  big:document.querySelector('4');
  rotate:document.querySelector('5');
 }
 1.addEventLisner('click',()=>{
  iconDes.innerText=;
 });
};
