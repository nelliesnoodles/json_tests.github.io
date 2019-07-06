## Testing use case of json file to store objects in a list

In one file, the json data   
Formatted as such:

 [
             {
             "item": string,
             "item2": string,
             "item3": string
             },
             {
             "item": string,
             "item2": string,
             "item3": string
             },
             
 ]
    

### JavaScript

```
function set_variables(i) {

    fetch('json1.json')
        .then(response => {
            return response.json()
        })
        .then(data => {
            // Work with JSON data here
            var element = document.getElementById("json_data");
            var dict = data[i];
            var name = dict.get(Name);
            element.innerHTML = name;
            console.log(name);
        })
        .catch(err => {
            // Do something for an error here
        })
};

function run_fetch() {
    var i = 0;
    set_variables(i);

```
# Goal:
    Get the set_variables to grab from the json data an object by index to set my main contents constants by.


- why won't it work in a function rather than on it's own outside of a function?
- catch err keeps being triggered when trying to retrieve specific get(item) from the object


# Reminders from original Github markdown page:
1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/nelliesnoodles/json_tests.github.io/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
