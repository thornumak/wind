if ('geolocation' in navigator) {
	navigator.geolocation.getCurrentPosition(async position => {
		try {
			const { latitude, longitude } = position.coords;

			const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e1979222f8033b6bfc6c1e544aaf4047&units=imperial`);
			const weatherData = await weatherResponse.json();

			const windSpeed = weatherData.wind.speed;
			const windDirection = weatherData.wind.deg;

			const weatherElement = document.getElementById('weather');
			weatherElement.innerHTML = `<p>Wind speed: ${windSpeed} mph</p><p>Wind direction: ${windDirection}&deg;</p>`;
		} catch (error) {
			console.log(error);
		}
	});
} else {
	alert('Geolocation is not supported in your browser');
}

