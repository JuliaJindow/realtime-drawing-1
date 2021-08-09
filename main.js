var noseX = 0;
var noseY = 0;
var rightWristX = 0;
var leftWristX = 0;
difference = 0;
function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550, 550);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
} 

function modelLoaded() {
    console.log("Model is loaded!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(rightWristX - leftWristX);
        console.log("rightWristX = " + rightWristX + "leftWristX = " + leftWristX);
        console.log("difference = " + difference);       
    }
}

function draw() {
    background('#fae');
    document.getElementById("square_size").innerHTML = "Width & height of a square will be = " + difference + "px";
    fill('#F90093');
    stroke('#F90093');
    square(noseX,noseY,difference);
}