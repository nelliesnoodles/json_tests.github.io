## Testing use case of json file to store objects in a list

In one file, the json data   
Formatted as such:
```

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
   ``` 

### JavaScript

```

//DOM elements to be written to with Json fetched data
let question;
let hint;
let code_box;
let code_json;
// while the DOM elements having the same id-name as the variables is not an issue,
// if the json data has the same name, conflictions may occor within this script.

let answer_a;
let answer_b;
let answer_c;
let answer_d;

let correct;

// Json set only, used to determine what to set to some above var(s)
let box_type;
let options;


function set_variables() {
    console.log("fetching...");

    return fetch('json1.json')
        .then(response => {
            return response.json()
        })
        .then(data => {
            // Work with JSON data here
            // DOM elements are set previous to running this function.
            console.log("setting data to JS variables, assigning to DOM elements.");
            var dict = data[0];
            var fetched_question = dict.question_j;
            question.innerHTML = fetched_question;
            var fetched_correct = dict.correct_j;
            correct.innerHTML = fetched_correct;
            var fetched_box_type = dict.box_type_j;
            box_type = fetched_box_type;
            var fetched_hint = dict.hint_j;
            hint.innerHTML = fetched_hint;
            var fetched_options = dict.answers_j;
            options = fetched_options;

            if (fetched_box_type == 'code'){
              var fetched_code = dict.code_j;
              code_json.innerHTML = fetched_code;
              var fetched_a = options.a;
              answer_a.innerHTML = fetched_a;
              var fetched_b = options.b;
              answer_b.innerHTML = fetched_b;
              var fetched_c = options.c;
              answer_c.innerHTML = fetched_c;
              var fetched_d = options.d;
              answer_d.innerHTML = fetched_d;

            }
        })

        .catch(err => {
            // Do something for an error here
            console.log("Error in data transfer from json");
            console.log(err.message);
        })
};

function setDOMelements(){
  console.log("Setting DOM elements in JS.")
  question=document.getElementById("question");
  hint=document.getElementById("hint");
  code_box=document.getElementById("code_box");
  code_json=document.getElementById("code_json");
  answer_a=document.getElementById("answer_a");
  answer_b=document.getElementById("answer_b");
  answer_c=document.getElementById("answer_c");
  answer_d=document.getElementById("answer_d");
  correct=document.getElementById("correct");
}

function run_fetch() {
    console.log("running fetch");
    setDOMelements()
    set_variables();
};


```
# Goal:
  test a new form of quiz question that can display code from json file.
  TO-DO:  It can't do code, and html elements like <br> , so how do I store it/ display it?




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
