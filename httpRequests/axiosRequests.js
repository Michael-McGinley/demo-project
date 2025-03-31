const axios = require("axios");
const request = new Request("https://wft-geo-db.p.rapidapi.com/v1/geo/cities?types=CITY&location=55-7&radius=50&distanceUnit=KM&namePrefix=Derry&limit=10", {
    method: "GET",
    headers: {"x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
        "x-rapidapi-key": "2a995fc3e3msh460fb29a2e13aacp1e1330jsn74bc4a4ccf53"
    }
});

const aRequest = axios({
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?types=CITY&location=55-7&radius=50&distanceUnit=KM&namePrefix=Derry&limit=10",
    method: 'GET',
    headers: {"x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
        "x-rapidapi-key": "2a995fc3e3msh460fb29a2e13aacp1e1330jsn74bc4a4ccf53"
    }
})
    .then(response => console.log(response.data))
    .catch(error => console.error(error));