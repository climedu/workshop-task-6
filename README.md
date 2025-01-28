# workshop-task-6
Here is a URL to the webpage for this project: [link]( https://climedu.github.io/workshop-task-6/)

## Task
- Create an interactive nonsense poem generator using the rita.js library.
- Use at least three different functions from the rita.js library to process the user's input.
- Make a new repository for your p5.js project on your GitHub account, publish your sketch as a webpage, and include a README file in your repository with a URL to the webpage along with documentation of your work.

## Overview
- 

## Workshop Notes (Text & Language)

### font
```ruby
let font1;
let s = 'Strings are text';

let userInput;
let button;
let userLine;

let poem = []

function preload(){
  font1 = loadFont('JeetBrainsMonoSlashedNL-Regular.otf');
}

function setup(){
  createCanvas(400,400);
  textFont(font1);
  userInput = createInput();
  userInput.position(40,100);
  button = createButton('add to poem');
  button.position(userInput.x, userInput.y + 20);
  button.mousePressed(newLine); //newLine is function

}

function draw(){
  background(220);
  text('Testing this font', 40,50);
  text(s,40,70);
  writePoem();
}

// to show the poem
function newLine(){
  userLine = userInput.value();
  userInput.value(''); // reset it to empty
  poem.push(userLine);
}
// to store the poem data
function writePoem(){
  for(x = 0; x < poem.length; x++){
    text(poem[x], 40, 180 + x*20);
  }

}

```
### Add poem generator
- Looking at toolkit RiTa.js
- Can be accessed through github
- It has the reverence online
- How to use it : 
<img width="400" alt="Screenshot 2025-01-28 at 10 28 38 AM" src="https://github.com/user-attachments/assets/db7ae892-ecc1-4f12-b5d3-4787d78fcc14" />

- add <script src="https://unpkg.com/rita"></script> to the index.html
- Rita is taking a string and breaking it down into separate words, so we can replace the nouns, or find things with the rhyme, certain words in strings or all the words in string
- Separate the user
```ruby
let font1;
let s = 'Strings are text';

let userInput;
let button;
let userLine;

let poem = []

function preload(){
  font1 = loadFont('JeetBrainsMonoSlashedNL-Regular.otf');
}

function setup(){
  createCanvas(400,400);
  textFont(font1);
  userInput = createInput();
  userInput.position(40,100);
  button = createButton('add to poem');
  button.position(userInput.x, userInput.y + 20);
  button.mousePressed(newLine); //newLine is function

}

function draw(){
  background(220);
  writePoem();
}

// to show the poem
function newLine(){
  userLine = userInput.value();
  userInput.value(''); // reset it to empty

  let words = RiTa.tokenize(userLine);
  lt r = floor(random(0, words.length));
  // finding words that rhymes
  let rhymes = RiTa.ryhmesSync(words[r]);
  let changeWord = random(rhymes);
  words[r] = changedWord;
  underLine = RiTa.untokenize(words);
  poem.push(userLine);
}

// to store the poem data
function writePoem(){
  for(x = 0; x < poem.length; x++){
    text(poem[x], 40, 180 + x*20);
  }

}

```

The cat sat on the mat > turned into this : (just randomly select 1 thing)

<img width="400" alt="Screenshot 2025-01-28 at 12 05 53 PM" src="https://github.com/user-attachments/assets/3acb9ff7-055e-42da-9327-e1e903f466f1" />

Other examples : 

<img width="400" alt="Screenshot 2025-01-28 at 12 14 02 PM" src="https://github.com/user-attachments/assets/07582dd2-372e-43de-b7d5-1f65f921d49a" />

If RiTa doesn't find any rhyming words, just leave the user's input as it is. If doesn't find any rhyming words, just stay as it is. 

```ruby
function newLine(){
  userLine = userInput.value();
  userInput.value(''); // reset it to empty

  let words = RiTa.tokenize(userLine);
  let r = floor(random(0, words.length));
  // finding words that rhymes
  let rhymes = RiTa.ryhmesSync(words[r]);
  
  if (rhymes.length === 0 ){
    poem.push(userLine);
  } else {
      let changeWord = random(rhymes);
      words[r] = changedWord;
      underLine = RiTa.untokenize(words);
      poem.push(userLine);
    }
}
```

<img width="400" alt="Screenshot 2025-01-28 at 12 20 18 PM" src="https://github.com/user-attachments/assets/5e4bff63-5069-4d8d-bbd0-b4c034e7ca52" />

<img width="400" alt="Screenshot 2025-01-28 at 12 51 32 PM" src="https://github.com/user-attachments/assets/0c7ff9e5-da28-4034-aae5-d1366fe1ef96" />

Reference that can be look at https://rednoise.org/rita/#reference

```ruby
let userInput;
let button;
let userLine;
let response;

let poem = []

function preload(){
  font1 = loadFont('JeetBrainsMonoSlashedNL-Regular.otf');
}

function setup(){
  createCanvas(400,400);
  textFont(font1);
  userInput = createInput();
  userInput.position(40,100);
  button = createButton('add to poem');
  button.position(userInput.x, userInput.y + 20);
  button.mousePressed(newLine); //newLine is function

}

function draw(){
  background(220);
  writePoem();
}

// to show the poem
function newLine(){
  userLine = userInput.value();
  userInput.value(''); // reset it to empty
  poem.push(userLine);

  let words = RiTa.tokenize(userLine);
  response = '';
  for (x = 0 ; x< words.length; x+){
    if(RiTa.isNoun(words[x])){
      response += RiTa.randomWord({pos: "nn"}); //nn is noun
    }else {
    response += words[i];
    }
    response += ' '; //adding space between the words
  }

  poem.push(response);

}


// to store the poem data
function writePoem(){
  for(x = 0; x < poem.length; x++){
    text(poem[x], 40, 180 + x*20);
  }

}
```
<img width="400" alt="Screenshot 2025-01-28 at 1 07 04 PM" src="https://github.com/user-attachments/assets/e870dbf7-41e2-4a7c-ad11-7b16e8d005f8" />

## Task Journey


### Process 1


### Commentaries
- 

## Future Development

