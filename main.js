// 定义动画关键帧和计时  
const aliceTumbling = [  
  { transform: "rotate(0deg) scale(1)" },  
  { transform: "rotate(360deg) scale(0)" }  
];  

const aliceTiming = {  
  duration: 2000,  
  fill: "forwards"  
};  

// 获取图像元素  
const alice1 = document.querySelector("#alice1");  
const alice2 = document.querySelector("#alice2");  
const alice3 = document.querySelector("#alice3");  

// 定义一个函数来执行动画，并在完成后调用下一个动画  
function animateAlice(img, delay = 0) {  
  setTimeout(() => {  
      img.animate(aliceTumbling, aliceTiming);  
  }, delay);  
}  

// 为图像设置动画，每个动画之间有2秒的延迟  
animateAlice(alice1, 0);  
animateAlice(alice2, 2000); // 这里应该是第一个动画结束后的延迟  
animateAlice(alice3, 4000); // 这里应该是第二个动画结束后的延迟（如果每个动画都是2000ms）