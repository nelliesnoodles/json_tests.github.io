fetch('json1.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        // Work with JSON data here
        var element = document.getElementById("json_data");
        var array_1 = JSON.stringify(data)
        //element.innerHTML = name;
        console.log(array_1)
    })
    .catch(err => {
        // Do something for an error here
    })
