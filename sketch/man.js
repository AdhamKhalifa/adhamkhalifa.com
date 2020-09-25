var firebaseConfig = {
    apiKey: "AIzaSyBG0FKjvV_ljauJsdWGiSSbLDO6a7tgEY4",
    authDomain: "collaborative-sketch-d88f5.firebaseapp.com",
    databaseURL: "https://collaborative-sketch-d88f5.firebaseio.com",
    projectId: "collaborative-sketch-d88f5",
    storageBucket: "collaborative-sketch-d88f5.appspot.com",
    messagingSenderId: "524303672683",
    appId: "1:524303672683:web:e46a4933467da6cc39182e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var pointsData = firebase.database().ref()

  var points = []

function setup() {
  createCanvas(400, 400)
  background(255)
  fill(0)
  pointsData.on('child_added', function (point) {
    points.push(point.val())
  })
  pointsData.on('child_removed', function () {
    points = []
  })

  canvas.mousePressed(drawPoint)
  canvas.mouseMoved(drawPointIfMousePressed)
}

function draw() {
    background(255)
  
    for (var i = 0; i < points.length; i++) {
      var point = points[i]
      circle(point.x, point.y, 5)
    }
  }

function drawPoint() {
    pointsData.push({ x: mouseX, y: mouseY })
}

function drawPointIfMousePressed() {
    if (mouseIsPressed) {
      drawPoint()
    }
  }
  
  $('#saveDrawing').on('click', saveDrawing)
  
  function saveDrawing() {
    saveCanvas()
  }
  
  $('#clearDrawing').on('click', clearDrawing)
  
  function clearDrawing() {
    pointsData.remove()
    points = []
  }
  
