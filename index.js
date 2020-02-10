'use strict'

var model_sel = document.querySelector('#model_sel')
var text_in = document.querySelector('#text_in')
var go = document.querySelector('#go')
var text_out = document.querySelector('#text_out')

go.addEventListener('click', runLookup)

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
}

function runLookup() {
  var model = model_sel.value
  var rnn = ml5.charRNN('ml5/models/lstm/' + model + '/', modelLoaded);
  if (text_in.value) {
    rnn.generate({ seed: text_in.value }, (err, results) => {
      text_out.innerText = results.sample
    })
  }
}

function RNN_gen() {}

// Generete content

// Your code will go here
// open up your console - if everything loaded properly you should see 0.4.1
console.log('ml5 version:', ml5.version);
