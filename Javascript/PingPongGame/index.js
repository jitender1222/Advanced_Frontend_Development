
document.addEventListener("DOMContentLoaded",()=>{


    let table=document.getElementById("ping-pong-table");
    let ball=document.getElementById("ball");

    let ballX=50; // distance from the left of the ball w.r.t the ping pong table
    let ballY=50; // distance from the top of the ball w.r.t the ping pong table

    let dx=2;  // displacement factor in x-direction ,2 -> you will displace by 2px in +x direction (right side) , -2 -> you wll displace by 2px in -x direction (left side)
    let dy=2   // displacement factor in y-direction ,2 -> you will displace by 2px in +y direction (top side) , -2 -> you will  displace by 2px in -y directipo (down side)

    ball.style.left=`${ballX}px`;
    // ball.style.top=`${ballY}px`;

    setInterval(function exec(){
        ballX+=dx;
        ballY+=dy

        ball.style.left= `${ballX}px` ;
        ball.style.top=  `${ballY}px`;

        if(ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) dx*=-1;
        if(ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dy*=-1;
    },1)

});