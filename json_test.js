fetch('json1.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        // Work with JSON data here
        var element = document.getElementById("json_data");
        var name = data[0].name;
        element.innerHTML = name;
        console.log(data)
    })
    .catch(err => {
        // Do something for an error here
    })