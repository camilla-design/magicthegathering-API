const cardApi = "https://api.magicthegathering.io/v1/cards";

fetch(cardApi)
    .then(function(response) {
        return response.json()
    })
    .then(function(json) {
        handleJsonObject(json)
    })
    .catch(function(error) {
        console.log(error)
    });

    function handleJsonObject(json) {
        const results = json.results;
        console.dir(results);

        const resultsContainer = document.querySelector(".results");

        let html = "";

        results.forEach(function(card) {
            html += `<div class="col-sm-6 col-md-4 col-lg-3">
                        <div id="${card.id}">
                        <div class="image-cards" style="background-image url('${card.image}');"</div>
                        <div class="details">
                        <h4 class="name">${card.name}</div>

                        </div>
                    </div>`;
        });
        resultsContainer.innerHTML = html;
    }