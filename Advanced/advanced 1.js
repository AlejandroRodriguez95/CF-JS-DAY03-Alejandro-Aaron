function timeConvert(minutes)
{
    var hours=0;
    var initial=minutes;
    while(minutes>=60)
    {
        minutes-=60;
        hours++;
    }
    console.log(initial + " minutes = " + hours + "hours and " + minutes + " minutes.");
}
timeConvert(180);