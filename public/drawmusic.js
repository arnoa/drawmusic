// I know these global fuctions are wrong. I know!


function setupLayer(points, endImage) {


}

function layerComplete() {

}

function layerProgress() {

}


function startGame(level) {

}

function endGame() {

}


var level = {
  "name": "twinkle",
  "layers": [
    {
      "tiles": [
        {
          "x": 3,
          "y": 134,
          "src": "tile001.png"
        },
        {
          "x": 100,
          "y": 102,
          "src": "tile001.png"
        },
        {
          "x": 129,
          "y": 4,
          "src": "tile001.png"
        },
        {
          "x": 190,
          "y": 85,
          "src": "tile001.png"
        },
        {
          "x": 291,
          "y": 83,
          "src": "tile001.png"
        },
        {
          "x": 232,
          "y": 166,
          "src": "tile001.png"
        },
        {
          "x": 266,
          "y": 261,
          "src": "tile001.png"
        },
        {
          "x": 168,
          "y": 232,
          "src": "tile001.png"
        },
        {
          "x": 87,
          "y": 294,
          "src": "tile001.png"
        },
        {
          "x": 88,
          "y": 193,
          "src": "tile001.png"
        }
      ],
      "src": "twinkle/star.png",
      "audio": "audio.mp3"
    }
  ]
}

var level = {
  name: 'twinkle',
  layers: [
    { audio: 'twinkle/twink1_drums.mp3' },
    { audio: 'twinkle/twink1_bass.mp3' },
    { audio: 'twinkle/twink1_strings.mp3' },
    { audio: 'twinkle/twink1_lead.mp3' }
  ]
}



audio.prepareAudio(level)
audio.on('loaded', function() {
  //downloaded
})


// dummy loading
var currentTrack = 0;
var progress = 0;
function playMore() {
  audio.loadTrack(currentTrack)
  progress += 10
  audio.setProgress(progress)
  if (progress >= 100) {
    currentTrack++
    progress = 0
    if (currentTrack >= level.layers.length) {
      clearInterval(interval)
    }
  }

}
var interval = setInterval(playMore, 500)

/*
var a = {}
var b = $(a)

b.one('customevent', function() {
  console.log('got custom', arguments)
})

setTimeout(function() {
  b.trigger('customevent', ['abc', 'asd'])
  b.trigger('customevent', ['abc2', 'asd'])
}, 1000)*/