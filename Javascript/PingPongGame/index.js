
document.addEventListener("DOMContentLoaded",()=>{


    let table=document.getElementById("ping-pong-table");
    let ball=document.getElementById("ball");
    let paddle=document.getElementById("paddle");

    let ballX=50; // distance from the left of the ball w.r.t the ping pong table
    let ballY=50; // distance from the top of the ball w.r.t the ping pong table

    let dx=2;  // displacement factor in x-direction ,2 -> you will displace by 2px in +x direction (right side) , -2 -> you wll displace by 2px in -x direction (left side)
    let dy=2   // displacement factor in y-direction ,2 -> you will displace by 2px in +y direction (top side) , -2 -> you will  displace by 2px in -y directipo (down side)

    setInterval(function exec(){
        ballX+=dx;
        ballY+=dy

        ball.style.left= `${ballX}px` ;
        ball.style.top=  `${ballY}px`;

        /*
        * ballX < paddle.offsetWidth + paddle.offsetLeft -> if left (w.r.t) of ball < right (w.r.t) of ball 

        * ballY > paddle.offsetTop -> if top of ball > top of paddle
        
        * ballY + ball.offsetHeight < padding.offsetTop + paddle.offsetHeight ->

        * ballY + ball.offsetHeight -> bottom of ball

        * paddle.offsetTop + paddle.offsetHeight -> bottom of the paddle

        */

        if(ballX < paddle.offsetWidth + paddle.offsetLeft && ballY > paddle.offsetTop && ballY + ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight ){
            dx*=-1;
        }

        console.log("bally",ballY);
        console.log("paddle top",paddle.offsetTop)

        if(ballX > table.offsetWidth -  ball.offsetWidth || ballX <= 0) dx*=-1;
        if(ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dy*=-1;
    },1)

    let paddleY=0; 
    let pdY=10;

    document.addEventListener("keydown",(event)=>{
        event.preventDefault(); // this prevents the execution of the default event behaviour
        if(event.keyCode==38 && paddleY>0){
            // up keys 
            // paddleY+=(-1)*pdY
             paddleY-=pdY;
        }
        else if(event.keyCode==40 && paddleY< table.offsetHeight - paddle.offsetHeight){
            // downn keys
            paddleY+=pdY;
        }

        paddle.style.top=`${paddleY}px`
    })

    document.addEventListener("mousemove",(event)=>{
        let mouseDistanceFromTheTop=event.clientY; // this is the distance of the mouse point from the top of the screen.
        let distanceOfTableFromTop=table.offsetTop;

        let mousePointControl = mouseDistanceFromTheTop - distanceOfTableFromTop - paddle.offsetHeight/2;
        paddleY=mousePointControl;
        if(paddleY <= 0 || paddleY > table.offsetHeight - paddle.offsetHeight) return ;
        paddle.style.top=`${paddleY}px`;
    })

});