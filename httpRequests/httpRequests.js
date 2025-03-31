const request = new Request("https://wft-geo-db.p.rapidapi.com/v1/geo/cities?types=CITY&namePrefix=Derry&limit=11", {
    method: "GET",
    headers: {"x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
              "x-rapidapi-key": "2a995fc3e3msh460fb29a2e13aacp1e1330jsn74bc4a4ccf53"
    }
});

const controller = new AbortController();
const signal = controller.signal;

fetch(request)
    .then(response => {
        if (response.status !== 200) {
            throw new Error("Server response is " + response.status);
        } else {
            return response.json()
        }
    })
    .then(places => getPopulation(places));

function getPopulation(places){
    places.data.forEach((place) => console.log(place));
}