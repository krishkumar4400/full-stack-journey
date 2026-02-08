const URL = "https://cat-fact.herokuapp.com/facts";

async function fetchAPI () {
    const response = await fetch("https://cat-fact.herokuapp.com/facts");
    console.log(response)

    let data = await response.json();
    console.log(data);

    console.log(data[0].text);
}

fetchAPI();

// let promise = fetch(URL);
// console.log(promise);

// calling api using promises:
(function() {
    fetch(URL).then((response) => {
        return response.json(); 
    }).then((data) => {
        console.log(data);
        console.log(data[0].text); 
    });
})();

// next things to learn:
// HTTP verbs
// Response status code