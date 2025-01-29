# workshop-task-6
Here is a URL to the webpage for this project: [link]( https://climedu.github.io/workshop-task-6/)

## Task
- Create an interactive nonsense poem generator using the rita.js library.
- Use at least three different functions from the rita.js library to process the user's input.
- Make a new repository for your p5.js project on your GitHub account, publish your sketch as a webpage, and include a README file in your repository with a URL to the webpage along with documentation of your work.

## Overview
- Create poem generator and exploring rita.js library
- Explore on the noun, random, tokenized, verb, and pluralized features

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

- add <script src="https://unpkg.com/rita"></script>
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
For the RiTa functions, I'll explore on 	
RiTa.pluralize(word);
RiTa.isVerb()
RiTa.isNoun()

I was thinking since the word that can be pluralised is noun the RiTa.isNoun() functions will definitely be paired up with the RiTa.pluralize(word); funtion
### Process 1
Starting by downloading font on [link] (https://www.dafont.com/virust.font)

<img width="400" alt="Screenshot 2025-01-30 at 9 15 36 AM" src="https://github.com/user-attachments/assets/c22ab72a-58a6-44a5-9e52-15709662e47a" />


Trying to make the verb become red
```ruby
let userInput;
let button;
let userLine;
let response;

let poem = [];
let font1;

function preload(){
  font1 = loadFont('VIRUST.ttf'); // Ensure this path is correct
}

function setup(){
  createCanvas(400, 580);
  textFont(font1);
  userInput = createInput();
  userInput.position(40, 100);
  button = createButton('add to poem');
  button.position(userInput.x, userInput.y + 21);
  button.mousePressed(newLine);
}

function draw(){
  background(220);
  writePoem();
}

// to show the poem
function newLine(){
  userLine = userInput.value();
  userInput.value(''); // Reset input field
  poem.push(userLine);

  let words = RiTa.tokenize(userLine);
  response = '';
  for (let x = 0; x < words.length; x++) {
    if (RiTa.isNoun(words[x])) {
      response += RiTa.pluralize(words[x]);;
    } else {
      response += words[x];
    }
    response += ' '; // Add space between words

     if (	RiTa.isVerb(words[x])){
       fill(255, 0, 0); // Red color for verbs
      } else {
        fill(0);
     }
  }

  poem.push(response.trim()); // Add transformed line to poem
}

// to store the poem data
function writePoem(){
  for (let x = 0; x < poem.length; x++) {
    text(poem[x], 40, 180 + x * 20);
  }
}

```
<img width="400" alt="Screenshot 2025-01-30 at 8 10 12 AM" src="https://github.com/user-attachments/assets/f76012ef-2293-49ad-a8da-3484ecc7480a" />

### Process 2
Fixing the color by separate the loop

```ruby
let userInput;
let button;
let userLine;
let poem = [];
let font1;

function preload(){
  font1 = loadFont('VIRUST.ttf'); // Ensure this path is correct
}

function setup(){
  createCanvas(400, 580);
  textFont(font1);
  userInput = createInput();
  userInput.position(40, 100);
  button = createButton('add to poem');
  button.position(userInput.x, userInput.y + 21);
  button.mousePressed(newLine);
}

function draw(){
  background(220);
  writePoem();
}

// Store user input
function newLine(){
  userLine = userInput.value();
  userInput.value(''); // Reset input field
  poem.push(userLine); // Store the original sentence
}

// Display and process text dynamically
function writePoem(){
  let yPos = 180; // Initial vertical position

  for (let x = 0; x < poem.length; x++) {
    let words = RiTa.tokenize(poem[x]); // Split sentence into words
    let xPos = 40; // Initial x position for each line
    let response = ""; // Store processed sentence

    for (let j = 0; j < words.length; j++) {
      let word = words[j];

      // Pluralize nouns
      if (RiTa.isNoun(word)) {
        word = RiTa.pluralize(word);
      }

      // Set color: Red for verbs, black for everything else
      if (RiTa.isVerb(words[j])) {
        fill(255, 0, 0);
      } else {
        fill(0);
      }

      text(word, xPos, yPos);
      xPos += textWidth(word + " "); // Move x position for next word

      response += word + " ";
    }

    yPos += 20; // Move to next line
  }
}
```
<img width="200" alt="Screenshot 2025-01-30 at 9 12 53 AM" src="https://github.com/user-attachments/assets/119b3d86-9846-4310-8ff9-2c20e0b68552" />
<img width="200" alt="Screenshot 2025-01-30 at 9 12 49 AM" src="https://github.com/user-attachments/assets/6d9f7bf6-799e-48a3-809d-f211cb668f9e" />


### Commentaries
- It was a new thing to explore RiTa featurs and I think it could have a lot of possibilities
- I ddin't know how to use some of the features, maybe I'll explore more in the future

## Future Development
- Explore more, maybe the sounds features
- Maybe create a sentence based one word, if possible
