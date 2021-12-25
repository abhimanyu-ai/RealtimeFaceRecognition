function setup() {
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0ELpd10so/model.json', modelLoaded);
}
function modelLoaded() {
    console.log('Model has been loaded');
}
function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}
function gotResult(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById('person').innerHTML=results[0].label;
        document.getElementById('accuracy').innerHTML=results[0].confidence.toFixed(3);
    }
}