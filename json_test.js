function set_variables(i) {
    console.log("fetching...");

    return fetch('json1.json')
        .then(response => {
            return response.json()
        })
        .then(data => {
            // Work with JSON data here
            //var dict = data[i];  //<--  not working
            var element = document.getElementById("json_data");
            element.innerHTML = "fetching...."
            var dict_set_i = data[0];
            console.log(dict_set_i.get(Name));
            var name = dict_set_i.get(Name);
            element.innerHTML = name;
            console.log(name);
        })
        .catch(err => {
            // Do something for an error here
            console.log("Error in data transfer from json");
        })
};

function run_fetch() {
    console.log("running fetch");
    var i = 0;
    set_variables(i);
};
