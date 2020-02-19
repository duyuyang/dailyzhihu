function hello() {
    today=new Date();
    var day; var date; var hello;
    hour=new Date().getHours()
    if(hour < 6)hello='凌晨好，'
    else if(hour < 9)hello='早上好，'
    else if(hour < 12)hello='上午好，'
    else if(hour < 14)hello='中午好，'
    else if(hour < 17)hello='下午好，'
    else if(hour < 19)hello='傍晚好，'
    else if(hour < 22)hello='晚上好，'
    else {hello='夜深了，'}
    var webUrl = webUrl;
    document.write(' '+hello);
}