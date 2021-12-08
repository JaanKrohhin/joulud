function joonista(){
    g.strokeStyle="white";
    g.fillStyle="white";
    g.beginPath()
    g.arc(x, y, r, 0, 2*Math.PI, true);
    g.stroke();
    g.fill();
    g.closePath();
}
function liigu(){
    ysamm=ysamm+ykiirendus;
    if(kasSees(x+xsamm, y+ysamm)){
        y=Math.random() * (51 - 20) + 20;
        x=Math.random() * (201 - 20) + 20;
        ysamm=1;
    } else {
        x=x+xsamm;
        y=y+ysamm;
    }
    joonista();
}
function kasSees(uusX, uusY){
    if(uusX-r<0){return false;}
    if(uusX+r>t.width){return false;}
    if(uusY-r<0){return false;}
    if(uusY+r>t.height){return false;}
    if (uusY<149){return false;}
    return true;
}
