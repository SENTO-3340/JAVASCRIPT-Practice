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
  text:document.querySelector('.btn-text');
  color:document.querySelector('.btn-color');
  big:document.querySelector('.btn-big');
  small:document.querySelector('.btn-small');
  rotate:document.querySelector('.btn-rotate');
 };
 const iconText = [
  "This is JavaScript icon!",
  "Wow!!",
  "Great!!!",
  "Amazing!!!!",
  "Oh my god!!!!!"
 ];
 let textIndex = 0;
　iconDes.innerText = iconText[0];
  button.text.addEventLisner('click',()=>{
  textIndex = (textIndex+1)%iconText.length;
  iconDes.innerText = iconText[textIndex];
 });
};
 const iconColor = [
  "#121212",
  "gold",
  "red",
  "blue",
  "green"
 ];
 let colorIndex = 0;
　iconDes.style.color = iconColor[0];
  button.color.addEventLisner('click',()=>{
  colorIndex = (colorIndex+1)%iconColor.length;
  iconDes.style.color = iconColor[colorIndex];
 });
};
  let scaleIndex = 1;
  button.big.addEventLisner('click',()=>{
   for(let toBig=scaleIndex;toBig<1.8;toBig+0.2){
    iconImg.style.transform = scale(${toBig});
   }eles{
    alert("ムリですいね");
   }
  });
   button.small.addEventLisner('click',()=>{
   for(let toSmall=scaleIndex;toSmall>0.2;toSmall-0.2){
    iconImg.style.transform = scale(${toSmall});
   }eles{
    alert("消えちゃいまっせ");
   }
  });
  button.rotate.addEventLisner('click',()=>{
    iconImg.style.transform = rotate(1080deg);
  });
};