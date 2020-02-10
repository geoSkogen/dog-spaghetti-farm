'use strict'

var model_sel = document.querySelector('#model_sel')
var len_sel = document.querySelector('#length_sel')
var temp_sel = document.querySelector('#temp_sel')
var text_in = document.querySelector('#text_in')
var go = document.querySelector('#go')
var text_out = document.querySelector('#text_out')
var status_bar = document.querySelector('#status_bar')

go.addEventListener('click', runLookup)
text_in.addEventListener('keypress', (event) => {
  if (event.keyCode == 13) {
      runLookup()
  }
})

// When the model is loaded
function modelLoaded() {
  status_bar.innerText = 'loading results . . .'
}

function runLookup() {
  status_bar.innerHTML = ''
  text_out.innerHTML = ''
  var model = model_sel.value
  var rnn = ml5.charRNN('ml5/models/lstm/' + model + '/', modelLoaded);
  if (text_in.value) {
    rnn.generate(
      {
        seed: text_in.value,
        length: Number(len_sel.value),
        temperature: Number(temp_sel.value)/100
      },
      (err, results) => {
        text_out.innerText = results.sample
        status_bar.innerHTML = ''
    })
  }
}

function RNN_gen() {}

// Generete content

// Your code will go here
// open up your console - if everything loaded properly you should see 0.4.1
console.log('ml5 version:', ml5.version);
