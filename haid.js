let x=20, y=20, r=4;
let ysamm=3, xsamm=0, ykiirendus=0.4;
let t, g; //tahvel, graafiline kontekst
let colors=["red","white","yellow","darkviolet","pink","darkviolet"];

function allThings(){
    clearCan();
    tree();
    garlands();
    toys();
    star();
}
function start(){
    t=document.getElementById("tahvel");
    g=t.getContext("2d");
}
function clearCan(){
    g.clearRect(0, 0, t.width, t.height);
}
function tree(){
    g.clearRect(0, 0, t.width, t.height);
    g.beginPath()
    g.strokeStyle="brown";
    g.fillStyle="brown";
    g.fillRect(0,t.height-50,t.width,50);
    g.stroke();
    g.fill();
    g.closePath();

    g.beginPath()
    g.strokeStyle="chocolate";
    g.fillStyle="chocolate";
    g.fillRect(t.width/3,t.height-50,t.width/3,-100);
    g.stroke();
    g.fill();
    g.closePath();

    g.beginPath()
    g.strokeStyle="red";
    g.fillStyle="red";
    g.fillRect(t.width/3-20,t.height-50,t.width/3-40,-40);
    g.strokeStyle="yellow";
    g.fillStyle="yellow";
    g.fillRect(t.width/3+20,t.height-50,t.width/3-120,-40);
    g.fillRect(t.width/3-20,t.height-65,t.width/3-40,-10);
    g.stroke();
    g.fill();
    g.closePath();



    g.beginPath()
    g.strokeStyle="green";
    g.fillStyle="green";
    g.moveTo(t.width/7,t.height-125)
    g.lineTo(t.width-t.width/7,t.height-125)
    g.lineTo(t.width/2,t.height-300)
    g.stroke();
    g.fill();
    g.closePath();

    g.beginPath()
    g.moveTo(t.width/7,t.height-225)
    g.lineTo(t.width-t.width/7,t.height-225)
    g.lineTo(t.width/2,t.height-400)
    g.stroke();
    g.fill();
    g.closePath();

    g.beginPath()
    g.moveTo(t.width/7,t.height-325)
    g.lineTo(t.width-t.width/7,t.height-325)
    g.lineTo(t.width/2,t.height-500)
    g.stroke();
    g.fill();
    g.closePath();
}
function garlands() {

    g.beginPath();
    g.strokeStyle=arrayRNG(colors);
    g.lineWidth=rng(2,5);
    g.moveTo(t.width/7+15,t.height-330)
    g.bezierCurveTo(t.width/7+60,t.height-340,t.width/7+90,t.height-360,t.width/7+180,t.height-450);
    g.stroke();
    g.closePath();

    g.beginPath()
    g.strokeStyle=arrayRNG(colors);
    g.lineWidth=rng(2,5);
    g.moveTo(t.width/7+15,t.height-230)
    g.bezierCurveTo(t.width/7+60,t.height-240,t.width/7+90,t.height-260,t.width/7+250,t.height-370);
    g.stroke();
    g.closePath();

    g.beginPath();
    g.strokeStyle=arrayRNG(colors);
    g.lineWidth=rng(2,5);
    g.moveTo(t.width/7+15,t.height-130);
    g.bezierCurveTo(t.width/7+60,t.height-140,t.width/7+90,t.height-160,t.width/7+250,t.height-265);
    g.stroke();
    g.closePath();

    g.beginPath();
    g.strokeStyle=arrayRNG(colors);
    g.lineWidth=rng(2,5);
    g.moveTo((t.width-t.width/7)-15,t.height-130);
    g.bezierCurveTo((t.width-t.width/7)-60,t.height-140,(t.width-t.width/7)-120,t.height-170,(t.width-t.width/7)-250,t.height-270);
    g.stroke();
    g.closePath();
}
function toys(){
    g.beginPath()
    g.strokeStyle=arrayRNG(colors);
    for (let i = 0; i < 16; i++) {
        g.fillStyle=arrayRNG(colors);
        g.arc(t.width/7+35+i*12,t.height-330+i*10, r, 0, 2*Math.PI, true);
    }
    g.stroke();
    g.fill();
    g.closePath();

    g.beginPath()
    g.strokeStyle=arrayRNG(colors);
    for (let i = 0; i < 14; i++) {
        g.fillStyle=arrayRNG(colors);
        g.arc(t.width/7+70+i*12,t.height-380+i*10, r, 0, 2*Math.PI, true);
    }
    g.stroke();
    g.fill();
    g.closePath();

    g.beginPath()
    g.strokeStyle=arrayRNG(colors);
    for (let i = 0; i < 5; i++) {
        g.fillStyle=arrayRNG(colors);
        g.arc((t.width-t.width/7)-80-i*12,t.height-200+i*10, r, 0, 2*Math.PI, true);
    }
    g.stroke();
    g.fill();
    g.closePath();
}
function star(){
    g.beginPath()
    g.strokeStyle="yellow";
    g.fillStyle="yellow";
    g.lineWidth=1
    g.moveTo(t.width/2,t.height-559);
    g.lineTo(t.width-(t.width/7)*3-15,t.height-529);
    g.lineTo(t.width-(t.width/7)*3+20,t.height-527);
    g.lineTo(t.width-(t.width/7)*3-12,t.height-509);
    g.lineTo(t.width-(t.width/7)*3,t.height-479);
    g.lineTo(t.width/2,t.height-499);
    g.lineTo(t.width/7*3,t.height-479);
    g.lineTo(t.width/7*3+12,t.height-509);
    g.lineTo(t.width/7*3-20,t.height-527);
    g.lineTo(t.width/7*3+15,t.height-529);
    g.lineTo(t.width/2,t.height-559);
    g.stroke();
    g.fill();
    g.closePath();
}
function rng(min,max){
    return Math.random() * (max - min) + min;
}
function arrayRNG(array){
    return array[Math.floor(Math.random() * array.length)]
}

