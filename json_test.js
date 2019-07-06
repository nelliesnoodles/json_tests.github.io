function set_variables(i) {

    fetch('json1.json')
        .then(response => {
            return response.json()
        })
        .then(data => {
            // Work with JSON data here
            var element = document.getElementById("json_data");
            element.innerHTML = "fetching...."
            var dict = data[i];
            var name = dict.get(Name);
            element.innerHTML = name;
            console.log(name);
        })
        .catch(err => {
            // Do something for an error here
            console.log("Error in data transfer from json");
        })
};

function run_fetch() {
    var i = 0;
    set_variables(i);
}
