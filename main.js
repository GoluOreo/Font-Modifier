function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(150, 107)

    canvas = createCanvas(500,500);
    canvas.position(800,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw() {
    background('salmon')
}

function modelLoaded() {
    console.log("Modehl is rahdyh")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}