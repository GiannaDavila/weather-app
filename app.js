window.addEventListener('load', ()=> {
    let lon;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        (position =>{
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `http://api.weatherapi.com/v1/current.json/${lon}&${lat}4643b925107848f3a5544158223012`
        });

        fetch()
    }else{
        h1.textContent = "To display weather please make sure you enable your location."
    }
});