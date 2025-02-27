fetch('http://api.openweathermap.org/data/2.5/weather?id=520555&appid=70e1ed322b02acbc57d443dd91065f3e')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        //https://openweathermap.org/img/wn/02d@2x.png
        document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        // catch any errors
	});

fetch('http://api.openweathermap.org/data/2.5/weather?id=536203&appid=70e1ed322b02acbc57d443dd91065f3e')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.package-name2').textContent = data.name;
        document.querySelector('.price2').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer2').textContent = data.weather[0]['description'];
        //https://openweathermap.org/img/wn/02d@2x.png
        document.querySelector('.features2 li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        // catch any errors
	});
