function my_nameStyle(){
    //设置名字渐变
    let my_name = document.getElementById("my-name")
    let num = 0
    let n = false
    setInterval(function(){
        my_name.style.background = `linear-gradient(to right, rgb(200, 100, ${num}), rgb(250, 0, ${num}))`
        my_name.style.textShadow = `0px 0px 5px rgb(250, 0, ${num})`;

        if (num == 200){
            n = true
        }
        if (num == 0){
            n = false
        }
        if (n == true){
            num -= 1
        }else{
            num += 1
        }
        my_name.style.backgroundClip = 'text';
    }, 10)
}

function birthday() {
    var currentDate = new Date();
    var birthday = new Date(currentDate.getFullYear(), 6, 20); // 月份是从0开始的，所以6代表7月

    // 如果当前日期已经超过了7月20号，计算到下一年的7月20号的天数差
    if (currentDate > birthday) {
        birthday.setFullYear(currentDate.getFullYear() + 1);
    }

    // 计算两个日期之间的毫秒差
    var timeDiff = birthday.getTime() - currentDate.getTime();

    // 将毫秒差转换为天数
    var daysDiff = timeDiff / (1000 * 60 * 60 * 24);

    document.getElementById('birthday-content').innerHTML = Math.floor(daysDiff);
}

function setTime(){
    //设置时间
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();   
    let second = date.getSeconds();
    if (hour <= 9){
        hour = `0${hour}`;
    }
    if (minute <= 9){
        minute = `0${minute}`;
    }

    if (second <= 9){
        second = `0${second}`;
    }
    document.getElementById('clock').innerHTML = `${hour}:${minute}:${second}`
    let year = date.getFullYear();
    let month = date.getMonth();
    let d = date.getDate();
    document.getElementById("date").innerHTML = `${year}/${month + 1}/${d}`
}

function playMusic(){
    let music = document.getElementById("music");
    if (music.paused){
        document.getElementById("music-play").src = "./svg/music-stop.svg";
        music.play();
    }else{
        document.getElementById("music-play").src = "./svg/music-start.svg";
        music.pause();
    }
}

function week(){
    var today = new Date();
    var weekday = today.getDay();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    document.getElementById("week").innerHTML = `Today is ${days[weekday]}`;
}

function greet(){
    var now = new Date();
    var hours = now.getHours();

    if (hours < 12) {
        document.getElementById('greet').innerHTML = "早上好, Lin ☀️";
        document.getElementById('greet').style.backgroundColor = "#FFFFE0";
    } else if (hours < 18) {
        document.getElementById('greet').innerHTML = "下午好, Lin 🌞";
        document.getElementById('greet').style.backgroundColor = "#FFFACD";
    } else {
        document.getElementById('greet').innerHTML = "晚上好, Lin 🌜";
        document.getElementById('greet').style.backgroundColor = "#3d4f9e";
        document.getElementById('greet').style.color = '#e0e0e0';
    }
}

week();
greet();
birthday();
my_nameStyle();
setInterval(setTime, 1000)