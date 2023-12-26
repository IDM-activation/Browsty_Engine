function load()
{
    let alimests =document.getElementById('tex');
    let bike =alimests.value;

    window.open('https://www.'+bike+'.com');

}
function about(){
    window.open('about.html','_self');
}
//first series data
function google(){
    window.open('https://www.Google.com');
}

function youtube(){
    window.open('https://www.youtube.com');
}

function micro(){
    window.open('https://www.Microsoft.com');
}

function sf(){
    window.open('https://www.safari.com');
}
//second series data
function chat(){
    window.open('https://www.chatgpt.com');
}

function weather(){
    window.open('https://www.accuweather.com/en/in/india-weather');
}

function flipkart(){
    window.open('https://www.flipkart.com');
}

function amazon(){
    window.open('https://www.amazon.com');
}
//third seris data
function discord(){
    window.open('https://www.discord.com');
}

function insta(){
    window.open('https://www.Instagram.com');
}

function face(){
    window.open('https://www.flipkart.com');
}

function tele(){
    window.open('https://www.telegram.com');
}
//fourth series data
function trans(){
    window.open('https://translate.google.com');
}

function wiki(){
    window.open('https://wikipedia.com');
}

function chrome(){
    window.open('https://chrome.com');
}

function gmial(){
    window.open('https://mail.google.com/mail/u/0/#inbox');
}

function github(){
    window.open('https://www.github.com');
}
function steam(){
    window.open('https://store.steampowered.com/');
}

function own(){
    let namesspace =document.getElementById('tex').value;
    window.open(namesspace);
}

function bing(){
    window.open('https://www.bing.com');
}

function drive(){
    window.open('https://www.drive.google.com');
}

function maps(){
    window.open('https://www.google.co.in/maps/@25.0532804,83.6015335,14.71z?entry=ttu');
}

function bbc(){
    window.open('https://www.bbc.com');
}

function space(){
    window.open('https://www.space.com');
}
document.addEventListener('keydown', function(event) {
    if (event.key === '?') {
       load();
    }
});

document.addEventListener('keydown',function (event){
    if (event.key ==='#'){
        own();
    }
})

function gpay(){
    window.open('https://play.google.com/store/games?device=windows');
}