/**
 * This function is used to find the average of the three homework assignments for the class
 * @param {*} hw1 Represents homework assignment 1
 * @param {*} hw2 Represents homework assignment 2
 * @param {*} hw3 Represents homework assignement 3
 * @returns The average of all three homework assignments.
 */
function averageHomework(hw1, hw2, hw3) {

    // Check that the homework assignments are in a valid range
    if((hw1 >= 0) && (hw1 <= 100) && (hw2 >= 0) && (hw2 <= 100) && (hw3 >= 0) && (hw3 <= 100)) {
        
        var total = hw1 + hw2 + hw3;
        var average = (1/3) * total;
        return average;
    }

    return -1;
}

/**
 * Computes the average of the two tests for the class
 * @param {*} test1 Represents the score for test1
 * @param {*} test2 Represents the score for test2
 * @returns The average of the wo test scores
 */
function averageTest(test1, test2) {

    // Check that the test scores are in a valid range
    if ((test1 >= 0) && (test1 <= 100) && (test2 >= 0) && (test2 <= 100)) {
        var total = test1 + test2;
        var average = (1/2) * total;
        return average
    }
}

/**
 * Computes the overall score the student has recieved for their assignments
 * @param {*} hw1 Represents the score for homework 1
 * @param {*} hw2 Represents the score for homework 2
 * @param {*} hw3 Represents the score for homework 3
 */
function getAssignmentWeight(hw1, hw2, hw3) {

    var weight = 0.2; // Homework makes up 20% of the total grade
    var average = averageHomework(hw1, hw2, hw3);

    var weightedPercent = average * weight;
    return weightedPercent;
}

/**
 * Computes the overall score the student has recieved for their tests
 * @param {*} test1 Represents the score for test 1
 * @param {*} test2 Represents the score for test 2
 */
function getTestWeight(test1, test2) {

    var weight = 0.8; // Each test accounts for 40 percent of the overall grade
    var average = averageTest(test1, test2);

    var weightedPercent = weight * average;
    return weightedPercent;

}

/**
 * Computes the rounded final grade as a precentage for the student and prints their letter grade to the terminal
 * @param {*} hw1 Represents the score for homework 1
 * @param {*} hw2 Represents the score for homework 2
 * @param {*} hw3 Represents the score for homework 3
 * @param {*} test1 Represents the score for Test 1
 * @param {*} test2 Represents the score for Test 2
 */
function getFinalGrade(hw1, hw2, hw3, test1, test2) {

    var testPercent = getTestWeight(test1, test2);
    var assignmentPercent = getAssignmentWeight(hw1, hw2, hw3);

    return Math.round(testPercent + assignmentPercent);
}

/**
 * Prints the final letter grade to the console
 * @param {*} grade Represents the grade the student achieved as a float
 */
function printFinalGrade(grade) {

    console.log('FINAL PERCENTAGE: ' + grade)

    if(grade >= 93) {
        console.log(' Grade: A');
    } else if (grade >= 90) {
        console.log(' Grade: A-');
    } else if (grade >= 87) {
        console.log(' Grade: B+');
    } else if (grade >= 83) {
        console.log(' Grade: B');
    } else if (grade >= 80) {
        console.log(' Grade: B-');
    } else if (grade >= 77) {
        console.log(' Grade: C+');
    } else if (grade >= 73) {
        console.log(' Grade: C');
    } else if (grade >= 70) {
        console.log(' Grade: C-');
    } else if (grade >= 67) {
        console.log(' Grade: D+');
    } else if (grade >= 63) {
        console.log(' Grade: D');
    } else if (grade >= 60) {
        console.log(' Grade: D-');
    } else {
        console.log(' Grade: F');
    }

}

/**
 * Tests the averageHomework function
 */
function testAverageHomework() {

    // Set all values here
    var largeVal = 200;
    var lowVal = -100;

    var normalVal = 80;
    var normalVal2 = 75;
    var normalVal3 = 50;

    var boundaryValHigh = 100;
    var boundaryValLow = 0;
    var count = 1;
    var hasFailed = false;

    // Test the function here and give feedback
    // Test with normal values 
    averageNormal = averageHomework(normalVal, normalVal2, normalVal3);  // === 68.33
    averageNormal2 = averageHomework(normalVal, normalVal, normalVal);   // === 80

    // Test with too large values in each of the three positions
    averageTooLarge1 = averageHomework(largeVal, normalVal, normalVal);  // === -1
    averageTooLarge2 = averageHomework(normalVal, largeVal, normalVal);  // === -1
    averageTooLarge3 = averageHomework(normalVal, normalVal, largeVal);  // === -1

    // Test with the too small values in each of the three positions
    averageTooSmall1 = averageHomework(lowVal, normalVal3, normalVal3);  // === -1
    averageTooSmall2 = averageHomework(normalVal3, lowVal, normalVal3);  // === -1
    averageTooSmall3 = averageHomework(normalVal3, normalVal3, lowVal);  // === -1

    // Test with boundary conditions
    averageBoundary1 = averageHomework(boundaryValHigh, boundaryValHigh, boundaryValHigh);  // === 100
    averageBoundary2 = averageHomework(normalVal2, normalVal3, boundaryValHigh);            // === 75
    averageBoundary3 = averageHomework(boundaryValLow, boundaryValLow, boundaryValLow);     // === 0
    averageBoundary4 = averageHomework(normalVal, normalVal3, boundaryValLow);              // === 43.33

    // Check all of the values for accuracy
    console.log('\nTESTING FUNCTION: averageHomework()');

    // Check with normal values
    if(Math.round(averageNormal) === 68) {
        console.log("  " + (count++) + ' PASS');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, 75, 50 } -> Result = ' + averageNormal);
        hasFailed = true;
    }
      
    if(averageNormal2 === 80) {
        console.log("  " + (count++) + ' PASS');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, 80, 80 } -> Result = ' + averageNormal2);
        hasFailed = true;
    }

    // Test with too large
    if (averageTooLarge1 === -1) {
        console.log("  " + (count++) + ' PASS');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 200, 80, 80 } -> Result = ' + averageTooLarge1);
        hasFailed = true;
    }

    if (averageTooLarge2 === -1) {
        console.log("  " + (count++) + ' PASS');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, 200, 80 } -> Result = ' + averageTooLarge2);
        hasFailed = true;
    }

    if (averageTooLarge3 === -1) {
        console.log("  " + (count++) + ' PASS');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, 80, 200 } -> Result = ' + averageTooLarge3);
        hasFailed = true;
    }

    // Test with too small values 
    if (averageTooSmall1 === -1) {
        console.log("  " + (count++) + ' PASS');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { -100, 50, 50 } -> Result = ' + averageTooSmall1);
        hasFailed = true;
    }

    if (averageTooSmall2 === -1) {
        console.log("  " + (count++) + ' PASS');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 50, -100, 50 } -> Result = ' + averageTooSmall2);
        hasFailed = true;
    }

    if (averageTooSmall3 === -1) {
        console.log("  " + (count++) + ' PASS');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 50, 50, -100 } -> Result = ' + averageTooSmall3);
        hasFailed = true;
    }

    // Test with boundary conditions
    if (averageBoundary1 === 100) {
        console.log("  " + (count++) + ' PASS');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, 80, 80 } -> Result = ' + averageBoundary1);
        hasFailed = true;
    }

    if (averageBoundary2 === 75) {
        console.log("  " + (count++) + ' PASS');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, 80, 80 } -> Result = ' + averageBoundary2);
        hasFailed = true;
    }

    if (averageBoundary3 === 0) {
        console.log("  " + (count++) + ' PASS');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, 80, 80 } -> Result = ' + averageBoundary3);
        hasFailed = true;
    }

    if (Math.round(averageBoundary4) === 43) {
        console.log("  " + (count++) + ' PASS');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, 80, 80 } -> Result = ' + averageBoundary4);
        hasFailed = true;
    }

    if (hasFailed) {
        console.log('RESULT: FAILED')
    } else {
        console.log("RESULT : PASSED")
    }

} // END test average homework function

/**
 * Tests the averageTest function
 */
function testAverageTest() {

}

/**
 * Tests the getAssignmentWeight function
 */
function testGetAssignmentWeight() {

}

/**
 * Tests the getTestWeight function
 */
function testGetTestWeight() {

}

/**
 * Tests the getFinalGrade function
 */
function testGetFinalGrade() {

}

//var prompt = require('fs');
var prompt = require('prompt');
var schema = {
   properties: {
    
     hw1: { 
       pattern: /^[0-9]\d*(\.\d+)?$/,
       message: 'Grade must be postive number',
       required: true},
     hw2: { 
      pattern: /^[0-9]\d*(\.\d+)?$/,
       message: 'Grade must be postive number',
       required: true
     },
     hw3: { 
      pattern: /^[0-9]\d*(\.\d+)?$/,
       message: 'Grade must be postive number',
       required: true
     },
     exam1: { 
      pattern: /^[0-9]\d*(\.\d+)?$/,
       message: 'Grade must be postive number',
       required: true
     },
     exam2: { 
      pattern: /^[0-9]\d*(\.\d+)?$/,
       message: 'Grade must be postive number',
       required: true
     }
     
   }
 };

prompt.get(schema, function (err, result) {

//    console.log(' Assignment1: ' + result.assignment1);
//    console.log(' Assignment2: ' + result.assignment2);
//    console.log(' Assignment3: ' + result.assignment3)
//    console.log(' exam1: ' + result.test1);
//    console.log(' exam2: ' + result.test2);

    var finalGrade = getFinalGrade(result.hw1, result.hw2, result.hw3, result.test1, result.test2);
    printFinalGrade(finalGrade);

});

//prompt.start();



testAverageHomework();
testAverageTest();
testGetAssignmentWeight();
testGetTestWeight();
testGetFinalGrade();