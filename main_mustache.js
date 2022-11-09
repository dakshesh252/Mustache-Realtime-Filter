noseX = 0;
noseY = 0;

function preload(){
    Mustache= loadImage(" https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas =createCanvas(550,500);
    canvas.position(530,270);
    video = createCapture(VIDEO);
    video.size(550,500);
    video.hide();

    poseNet =  ml5.poseNet(video, modeloaded);
    poseNet.on('pose', gotPoses);
}

function modeloaded(){
    console.log("Posenet is initialized");
}

function gotPoses(results){ 
    if(results.length > 0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log('nose x =' + results[0].pose.nose.x);
        console.log('nose y =' + results[0].pose.nose.y);
    }
}

function draw(){
    image(video,0,0,550,500);
    image(Mustache,noseX-40,noseY-5,90,90);
}


function takeSnapshot(){
    save("my_filterImage_of_mustache.png");
}