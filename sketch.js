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
