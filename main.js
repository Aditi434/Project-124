noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup()
{
    video= createCapture(VIDEO);
    video.size(550, 500);

    canvas=createCanvas(550, 550);
    canvas.position(600,160);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('posenet is initialised');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log(noseX, noseY);
    
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
    
        difference = floor(leftWristX - rightWristX);
        console.log(difference, leftWristX, rightWristX);
    }
   
}

function draw()
{
    background('#6C91C2');
    document.getElementById("square_inside").innerHTML = "Font size of the text will be " + difference + "px";
    textSize(difference);
    fill('#FFE787');
    text('Aditi', 50, 400)
}