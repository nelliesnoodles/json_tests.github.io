
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
