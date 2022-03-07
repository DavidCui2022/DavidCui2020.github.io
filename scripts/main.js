let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world! 你好，世界，我来了';

let myImage = document.querySelector('img');
let images = ['./images/firefox-icon.png', './images/firefox-icon-black.png', './images/firefox-icon-beta.png'];
let index = 0;
myImage.onclick = function() {
    let src = myImage.getAttribute('src');
    index = (index + 1) % 3;
    myImage.setAttribute('src', images[index])
};

let myButton = document.querySelector('button');
let storeName = localStorage.getItem('name');
if(!storeName || storeName == null) {
    setUserName();
} else {
    myHeading.textContent = '你很吊啊，' + storeName + '！';
}

myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    let myName = prompt('请输入名字');
    if(!myName || myName == null) {
        return
    }else {
        localStorage.setItem('name', myName);
        myHeading.textContent = '你很吊啊，' + myName + '！';
    }
}