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
  text:document.querySelector('text');
  color:document.querySelector('color');
  small:document.querySelector('small');
  big:document.querySelector('big');
  rotate:document.querySelector('rotate');
 }
 const iconText = [
   "This is JavaScript icon!",
   "Wow!!",
   "Great!!!",
   "Amazing!!!!",
   "Oh my god!!!!!"
 ];
 const iconColor = [
   "black",
   "red",
   "bule",
   "green",
   "gold"
 ];
 button.text.addEventLisner('click',()=>{
   for(let number = 0 ; number<iconText.length ; number++){
   iconDes.innerText = iconText[number];
   if(number === iconText.length-1){
     number = 0;
   }
  }
 });
 button.color.addEventLisner('click',()=>{
   for(let number = 0 ; number<iconColor.length ; number++){
   iconDes.style.color = iconColor[number];
   if(number === iconText.length-1){
     number = 0;
   }
  }
  });
 button.small.addEventLisner('click',()=>{
   for(let number = 1 ; number>0.2 ; number-0.2){
   iconImg.style.transform = scale(${number});
   if(number === 0.2){
     number = 0;
   }
  }
  });
 button.big.addEventLisner('click',()=>{
   for(let number = 1 ; number<0.8 ; number+0.2){
   iconImg.style.transform = scale(${number});
   if(number === 0.8){
     number = 0;
   }
  }
  });
