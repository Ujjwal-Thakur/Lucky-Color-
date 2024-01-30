const container = document.getElementsByClassName("container");

const zodiac = document.getElementById("zodiac");
let text = document.createElement("h1");
            text.innerText="Your Lucky Color";
            text.style.backgroundColor = "#EDF2FA";
            text.style.color = "#660e60"
            text.style.textAlign= "center";
            container[0].append(text);


const getLuckyColor = () => {

    switch(zodiac.value)
    {
        case "aries":
            container[0].style.backgroundColor = "red";
            text.innerText="Your Lucky Color is RED";
            text.style.backgroundColor="red";
            break;

        case "taurus":
            container[0].style.backgroundColor = "green";
            text.innerText="Your Lucky Color is Green";
            text.style.backgroundColor = "green";
            break;

        case "gemini":
            container[0].style.backgroundColor = "yellow";
            text.innerText="Your Lucky Color is YELLOW";
            text.style.backgroundColor="yellow";
            break;

        case "cancer":
            container[0].style.backgroundColor = "silver";
            text.innerText="Your Lucky Color is Silver";
            text.style.backgroundColor="silver";
            break;

        case "leo":
            container[0].style.backgroundColor = "gold";
            text.innerText="Your Lucky Color is GOLD";
            text.style.backgroundColor="gold";
            break;

        case "virgo":
            container[0].style.backgroundColor = "grey";
            text.innerText="Your Lucky Color is GREY";
            text.style.backgroundColor="grey";
            break;

        case "libra":
            container[0].style.backgroundColor = "pink";
            text.innerText="Your Lucky Color is PINK";
            text.style.backgroundColor="pink";
            break;

        case "scorpio":
            container[0].style.backgroundColor = "black";
            text.innerText="Your Lucky Color is BLACK";
            text.style.backgroundColor="black";
            break;

        case "sagittarius":
            container[0].style.backgroundColor = "purple";
            text.innerText="Your Lucky Color is Purple";
            text.style.backgroundColor="purple";
            break;

        case "capricorn":
            container[0].style.backgroundColor = "brown";
            text.innerText="Your Lucky Color is Brown";
            text.style.backgroundColor="brown";
            break;

        case "aquarius":
            container[0].style.backgroundColor = "blue";
            text.innerText="Your Lucky Color is BLUE";
            text.style.backgroundColor="blue";
            break;

        case "pisces":
            container[0].style.backgroundColor = "white";
            text.innerText="Your Lucky Color is WHITE";
            text.style.backgroundColor="white";
            break;

    }

}