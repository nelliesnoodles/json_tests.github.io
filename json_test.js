fetch('json1.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        // Work with JSON data here
        var element = document.getElementById("json_data");
        var dict = data[0];
        var name = dict.get(Name);
        element.innerHTML = name;
        console.log(name);
    })
    .catch(err => {
        // Do something for an error here
    })
