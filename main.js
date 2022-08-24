noseX=0;
noseY=0;

function preload() {
    clown_nose= loadImage('https://i.postimg.cc/5tKQhWd3/mustache-student-math-favorite-for-friday-the-the-1.png')

}

function setup() {
    canvas= createCanvas(500 , 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(700, 700);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded() {
    console.log("PoseNet Is Initialized");
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + noseX);
        console.log(" nose y =" + noseY);
    }
}

function draw() {
image(video, 0, 0, 700, 700);
image(clown_nose, noseX, noseY, 30, 30);

}

function take_snapshot() {
    save('myFilterimage.png');
}


