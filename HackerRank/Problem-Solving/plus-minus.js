'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    var pos=0, neg=0, zero=0, n=arr.length;
    // for(let i =0;i<arr.length;i++)
    // {
    //     var value=arr[i];
    //     if(value>0)
    //         pos=pos+1;
    //     else if(value<0)
    //         neg++;
    //     else
    //         zero++;
    // }
    arr.forEach((value) => {
        if(value > 0)
            pos=pos+1;
        else if(value<0)
            neg++;
        else
            zero++;
    })
    var posRatio=pos/n;
    var negRatio=neg/n;
    var zeroRatio=zero/n;
    console.log(posRatio.toFixed(6));
     console.log(negRatio.toFixed(6));
      console.log(zeroRatio.toFixed(6));
    

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
