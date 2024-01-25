This is a CountDown APP where the user has to select the time and date and the timer stops when the current date and time reaches to the required time.

logic

First Step -> we have to subtract the currentTime to the target Time and we get the num of milliseconds left to go to the required time.

Convert milliseconds to days 

( ( ( ( ms/1000 -> seconds) / 60 -> minutes ) / 60 -> hours ) / 24 -> days )