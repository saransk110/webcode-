

let arr = []
async function data() {
    let foo = await fetch("https://api.openbrewerydb.org/breweries")
    let result = await foo.json()
    let row = document.getElementById("row")
    console.log(result)
    for (let i = 0; i < result.length; i++) {
        let col = document.createElement("div");
        col.setAttribute("class", "col-md-4")

        let card = document.createElement('div');
        card.setAttribute("class", "card")
        card.setAttribute("id", `card${i}`)
        card.style.width = "18rem"
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body")
        cardBody.innerHTML = `<h5 class="card-title">${result[i].name}</h5>
        <p class="card-text">${result[i].brewery_type}</p>
        <a href=${result[i].website_url}  target="_blank" class="btn btn-primary">WEB LINK</a>
        <p class="card-text">${result[i].street};${result[i].city};${result[i].state},${result[i].country}<br>phone number: <b>${result[i].phone}</br></b>Postal-code :${result[i].postal_code}</p>`

        card.append(cardBody)
        col.append(card)

        row.append(col)
    }

    document.body.append(container)
}

data()