/* pseudocode

A program that take input of a speed of a car
promts user to input a speed.

if speed is less or equal to 70km/s print ok. 

else if speed is greater than 70, speed - 70 divide y 5 to get the demerit points.
print demerit points

if demerits points is equal or greater than 12, prints license suspended.





*/
 //Solution 
// function declaration
function speedDetector(speed){
//prompt to the user to put speed.
    speed = Number(prompt('Enter the speed'));

// condition
    if (speed <= 70){
        console.log('Ok');
    } else if (speed > 70) {
//calculate demerit points
            points = Math.floor((speed - 70) / 5);
            console.log('Demerit points:', points);

            if (points >= 12){
                return 'License Suspended';
            };

        
    } else {
        return ('Input speed of the car');

    };
    return speed;
};
// calling the function
speedDetector();