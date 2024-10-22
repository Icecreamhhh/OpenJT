// 大盒子动画
let allbox = document.querySelectorAll(".box");
let rollPhoto = document.querySelector(".logo3");
window.addEventListener("scroll", scrolload);
function scrolload() {
  let targetValue = window.innerHeight * 0.6;
  allbox.forEach((box) => {
    let boxtop = box.getBoundingClientRect().top;
    if (boxtop <= targetValue) {
      box.classList.add("center");
      // logo旋转动画
      rollPhoto.classList.add("roll");
    } else {
      box.classList.remove("center");
    }
  });
}
//小盒子动画
let allText = document.querySelectorAll(".Text");
window.addEventListener("scroll", () => {
  let targetValue = window.innerHeight * 0.3;
  allText.forEach((text) => {
    let textTop = text.getBoundingClientRect().top;
    if (textTop <= targetValue) {
      text.classList.add("fade");
    } else {
      text.classList.remove("fade");
    }
  });
});
//openJT渐显
let word = document.querySelector(".symbol");
window.addEventListener("scroll", wordfade);
function wordfade() {
  let targetHeight = window.innerHeight * 0.6;
  let textop = word.getBoundingClientRect().top;
  if (textop <= targetHeight) {
    word.classList.add("up");
  } else {
    word.classList.remove("up");
  }
}
//轮播图
const rockimg = document.querySelector(".img-continer");
const rocks = document.querySelectorAll(".photo");
const right = document.getElementById("right");
const left = document.getElementById("left");
let angle = 0;
function animation(x) {
  rockimg.style.transform = `translateZ(-60vw) rotateY(${x}deg)`;
}
//手动
left.onclick = function () {
  angle -= 90;
  animation(angle);
};
right.onclick = function () {
  angle += 90;
  animation(angle);
};
//自动
let timerun = function () {
  mySet = setInterval(animationOwn, 5000);
  function animationOwn() {
    angle -= 90;
    animation(angle);
  }
};
rocks.forEach((rock) => {
  rock.onmouseover = function () {
    clearInterval(mySet);
  };
  rock.onmouseout = function () {
    timerun();
  };
});
// clearInterval(mySet);
timerun();

//轮播图按钮消失动画
let button = document.querySelector(".button");
let changelist = document.querySelectorAll(".change");
window.addEventListener("scroll", white);
function white() {
  let targetHeight = window.innerHeight * 0.8;
  let top = button.getBoundingClientRect().top;
  changelist.forEach((change) => {
    if (top <= targetHeight) {
      change.classList.add("white");
    } else {
      change.classList.remove("white");
    }
  });
}
//导航栏定位效果
function scrollto(x, y) {
  window.scrollTo({
    top: x,
    left: y,
    behavior: "smooth",
  });
}
const imgButtton = document.getElementById("clickOne");
const firstBUtton = document.getElementById("clickTwo");
imgButtton.onclick = function () {
  scrollto(0, 0);
};
firstBUtton.onclick = function () {
  scrollto(705, 0);
};
const ones = document.querySelectorAll(".clickThree");
const twos = document.querySelectorAll(".clickFour");
const threes = document.querySelectorAll(".clickFive");
const fours = document.querySelectorAll(".clickSix");
ones.forEach((one) => {
  one.onclick = function () {
    scrollto(1800, 0);
  };
});
twos.forEach((two) => {
  two.onclick = function () {
    scrollto(2950, 0);
  };
});
threes.forEach((three) => {
  three.onclick = function () {
    scrollto(4150, 0);
  };
});
fours.forEach((four) => {
  four.onclick = function () {
    scrollto(5350, 0);
  };
});
const zq = document.getElementById("zhengqi");
zq.onclick = function () {
  scrollto(7530, 0);
};
//柱状图
let num = [5.2, 8.4, 12.7, 18.0, 25.3, 32.4, 42.5, 55.6];
document.write(`    
        <div class="statistics">
            <div class="list">`);
for (i = 0; i < 8; i++) {
  document.write(`
              <div class="fill-list">
                <p>${num[i]}w</p>
                <div class="fill" style="height:${num[i] * 8}px;"></div>
                <h3>${i + 3}月</h3>
          </div>
    `);
}
document.write(`
              </div>
       </div>`);
const lists = document.querySelectorAll(".fill-list");
const listBox = document.querySelector(".statistics ");
window.addEventListener("scroll", () => {
  let targetHeight = window.innerHeight * 0.4;
  let targetValue = -window.innerHeight * 0.2;
  lists.forEach((list) => {
    let top = listBox.getBoundingClientRect().top;
    if (top <= targetHeight && top >= targetValue) {
      list.classList.add("up");
    } else {
      list.classList.remove("up");
    }
  });
});
//最后的背景查看
const end = document.querySelector(".end");
end.onclick = function () {
  end.style.height = "800px";
};
//调试
for (i = 0; i < 5; i++) {
  let height = allbox[i].getBoundingClientRect().top;
  console.log(height);
}
