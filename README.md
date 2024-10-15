# Full Stack Developer - Assignment


### Part 1: JavaScript




It operates in a VAR that is global and not local.
This means that all setTimeout calls have the same i variable.
When the loop ends, the value of i will be the size of the array, i.e. 5.
In the end all calls will print the same calls in the console because this time.
This is what will be printed:
 ```
The element in position 5 is: undefined
The element in position 5 is: undefined
The element in position 5 is: undefined
The element in position 5 is: undefined
The element in position 5 is: undefined
 ```

The first time this function prints a value is after 5 seconds, then the loop ends and the value of i is 5.
The array[i] value is undefined because the array is 5 in size as the array ends in 4 (from 0 to 4).
To fix this we will use a let that creates a local modifier for each iteration in the loop like this the code will look like:


 ```
const array = [12, 10, 22, 5, 25];
for (let i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log("The element in position " + i + " is: " + array[i]);
    }, 5000);
}
 ```



And this is the output:
 ```
The element in position 0 is: 12
The element in position 1 is: 10
The element in position 2 is: 22
The element in position 3 is: 5
The element in position 4 is: 25
 ```

### Part 2: Darkweb Scanner API

https://github.com/TziviMaklev/enqode_assigment/tree/main/darkweb-scanner

 
