var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var updateClock = function()
{
var messageTextJS = document.getElementById("timeEvent");
var lolcatImage = document.getElementById('lolcatImage');
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

if (time == partyTime){
	image = "https://i.ytimg.com/vi/HDOMbFRU-uk/hqdefault.jpg";
    messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
	image = "https://static.boredpanda.com/blog/wp-content/uploads/2014/01/funny-sleeping-cats-1.jpg";
    messageText = "IZ NAP TIME...";
} else if (time == lunchTime) {
	image = "https://2x0r8i4133bf3vh7w91g7xh4-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/What-to-Try-When-Your-Cant-Wont-Eat-1080x675.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeupTime) {
	image = "data:image/jpeg;base64,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";
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
	image = "https://happy-wishes.net/wp-content/uploads/2017/10/Funny-cat-Good-morning-images-for-cat-lovers.jpg";
    messageText = "Good morning!";
} else if (time > evening) {
	image = "https://media1.popsugar-assets.com/files/thumbor/EYb5dO2AAuFKts5Vj6o8wUPLV_E/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/08/08/878/n/1922507/caef16ec354ca23b_thumb_temp_cover_file32304521407524949/i/Funny-Cat-GIFs.jpg";
    messageText = "Good Evening!";
} else {
	image = "https://media1.popsugar-assets.com/files/thumbor/GP3fuGWyqsVOXHeJxehNRZUXrGc/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/04/538/n/1922398/addurlOdIKzZ/i/itsjustolmos.jpg";
    messageText = "Good afternoon!";
}

messageTextJS.innerText = messageText;

lolcatImage.src = image;

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

showCurrentTime();

};

updateClock();

var oneSecond = 1000;

setInterval( updateClock, oneSecond);

var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

var partyEvent = function(){
if (isPartyTime === false){
		isPartyTime = true;
		time = partyTime;
		partyTimeButton.innerText = "PARTY TIME!";
    	partyTimeButton.style.backgroundColor = "#ac00e6";
    } else {
        isPartyTime = false;
        time = new Date().getHours();
		partyTimeButton.innerText = "PARTY OVER";
      partyTimeButton.style.backgroundColor = "#ffff00";
    }
};

partyTimeButton.addEventListener("click", partyEvent);

var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");


var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};

var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};

var napEvent = function() {
    napTime = napTimeSelector.value;
};

napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
