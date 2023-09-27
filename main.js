noseX=0;
noseY=0;

function preLoad() {
    clown_nose=loadImage('https://i.postimg.cc/q7FvfGWM/e5cdf354fc1fa8e51163f45dbc17d0e4.jpg');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
}
    function take_snapshot() {
    save('My Awesome/Fantastic Picture.png');
    
}
 function modelLoaded() {
    console.log('poseNet is initialized');
 }

 function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX=" + noseX);
        console.log("noseY=" + noseY);
    }
 }