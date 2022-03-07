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
        return average;
    }

    return -1;
}

/**
 * Computes the overall score the student has recieved for their assignments
 * @param {*} hw1 Represents the score for homework 1
 * @param {*} hw2 Represents the score for homework 2
 * @param {*} hw3 Represents the score for homework 3
 */
function getAssignmentWeight(hw1, hw2, hw3) {

    var weight = 0.2; // Homework makes up 20% of the total grade
    var average = averageHomework(hw1, hw2, hw3);  // returns -1 if values are invalid

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
    var average = averageTest(test1, test2);  // returns -1 if values are invalid

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

    //console.log("\n[INFO] Test Percent:       " + testPercent + " %");
    //console.log("[INFO] Assignment Percent: " + assignmentPercent + " %");

    // If the values are less than 0 that means that they were out of range
    if((testPercent >= 0) && (assignmentPercent >= 0)) {
        return Math.round(testPercent + assignmentPercent);
    }

    // Values were incorrect, display message and exit
    //console.log("[!] ERROR: All values must be between 0 and 100.");
    //process.exit(1);
    return "[!] ERROR: All values must be between 0 and 100.";
}

/**
 * Prints the final letter grade to the console
 * @param {*} grade Represents the grade the student achieved as a float
 */
function printFinalGrade(grade) {

    console.log('\n[+] FINAL PERCENTAGE:      ' + grade + " %")

    if(grade >= 93) {
        console.log('[+] Grade:                 A');
    } else if (grade >= 90) {
        console.log('[+] Grade:                 A-');
    } else if (grade >= 87) {
        console.log('[+] Grade:                 B+');
    } else if (grade >= 83) {
        console.log('[+] Grade:                 B');
    } else if (grade >= 80) {
        console.log('[+] Grade:                 B-');
    } else if (grade >= 77) {
        console.log('[+] Grade:                 C+');
    } else if (grade >= 73) {
        console.log('[+] Grade:                 C');
    } else if (grade >= 70) {
        console.log('[+] Grade:                 C-');
    } else if (grade >= 67) {
        console.log('[+] Grade:                 D+');
    } else if (grade >= 63) {
        console.log('[+] Grade:                 D');
    } else if (grade >= 60) {
        console.log('[+] Grade:                 D-');
    } else {
        console.log('[+] Grade:                 F');
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
    console.log('\nTESTING FUNCTION: averageHomework(hw1, hw2, hw3):');

    // Check with normal values
    if(Math.round(averageNormal) === 68) {
        console.log("  " + (count++) + ' Normal Value Test 1: PASS. params = { 80, 75, 50 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, 75, 50 } -> Result = ' + averageNormal);
        hasFailed = true;
    }
      
    if(averageNormal2 === 80) {
        console.log("  " + (count++) + ' Normal Value Test 2: PASS. params = { 80, 80, 80 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, 80, 80 } -> Result = ' + averageNormal2);
        hasFailed = true;
    }

    // Test with too large
    if (averageTooLarge1 === -1) {
        console.log("  " + (count++) + ' Large Value Test 1: PASS. params = { 200, 80, 80 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 200, 80, 80 } -> Result = ' + averageTooLarge1);
        hasFailed = true;
    }

    if (averageTooLarge2 === -1) {
        console.log("  " + (count++) + ' Large Value Test 2: PASS. params = { 80, 200, 80 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, 200, 80 } -> Result = ' + averageTooLarge2);
        hasFailed = true;
    }

    if (averageTooLarge3 === -1) {
        console.log("  " + (count++) + ' Large Value Test 3: PASS. params = { 80, 80, 200 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, 80, 200 } -> Result = ' + averageTooLarge3);
        hasFailed = true;
    }

    // Test with too small values 
    if (averageTooSmall1 === -1) {
        console.log("  " + (count++) + ' Small Value Test 1: PASS. params = { -100, 50, 50 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { -100, 50, 50 } -> Result = ' + averageTooSmall1);
        hasFailed = true;
    }

    if (averageTooSmall2 === -1) {
        console.log("  " + (count++) + ' Small Value Test 2: PASS. params = { 50, -100, 50 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 50, -100, 50 } -> Result = ' + averageTooSmall2);
        hasFailed = true;
    }

    if (averageTooSmall3 === -1) {
        console.log("  " + (count++) + ' Small Value Test 3: PASS. params = { 50, 50, -100 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 50, 50, -100 } -> Result = ' + averageTooSmall3);
        hasFailed = true;
    }

    // Test with boundary conditions
    if (averageBoundary1 === 100) {
        console.log("  " + (count++) + ' Boundary Test 1: PASS. params = { 100, 100, 100 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 100, 100, 100 } -> Result = ' + averageBoundary1);
        hasFailed = true;
    }

    if (averageBoundary2 === 75) {
        console.log("  " + (count++) + ' Boundary Test 2: PASS. params = { 75, 50, 100 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 75, 50, 100 } -> Result = ' + averageBoundary2);
        hasFailed = true;
    }

    if (averageBoundary3 === 0) {
        console.log("  " + (count++) + ' Boundary Test 3: PASS. params = { 0, 0, 0 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 0, 0, 0 } -> Result = ' + averageBoundary3);
        hasFailed = true;
    }

    if (Math.round(averageBoundary4) === 43) {
        console.log("  " + (count++) + ' Boundary Test 4: PASS. params = { 80, 50, 0 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, 50, 0 } -> Result = ' + averageBoundary4);
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

    // Declare values to use here
    var normalVal = 75;
    var normalVal2 = 90;

    var highVal = 200;
    var lowVal = -100;

    var boundaryHigh = 100;
    var boundaryLow = 0;

    var count = 1;
    var hasFailed = false;

    // Test the function here
    var normalTest1 = averageTest(normalVal, normalVal);        // 75
    var normalTest2 = averageTest(normalVal2, normalVal2);      // 90

    var highValTest1 = averageTest(highVal, highVal);           // -1
    var lowValTest1 = averageTest(lowVal, lowVal);              // -1

    var boundaryTest1 = averageTest(boundaryLow, normalVal);    // 37.5
    var boundaryTest2 = averageTest(boundaryHigh, normalVal2);  // 95

    console.log("\nTESTING FUNCTION: averageTest(test1, test2):");

    // Check for expected output
    if (normalTest1 === 75) {
        console.log("  " + (count++) + ' Normal Test 1: PASS. params = { 75, 75 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 75, 75 } -> Result = ' + normalTest1);
        hasFailed = true;
    }

    if (normalTest2 === 90) {
        console.log("  " + (count++) + ' Normal Test 2: PASS. params = { 90, 90 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 90, 90 } -> Result = ' + normalTest2);
        hasFailed = true;
    }

    if (highValTest1 === -1) {
        console.log("  " + (count++) + ' High Value Test: PASS. params = { 200, 200 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 200, 200 } -> Result = ' + highValTest1);
        hasFailed = true;
    }

    if (lowValTest1 === -1) {
        console.log("  " + (count++) + ' Low Value Test: PASS. params = { -100, -100 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { -100, -100 } -> Result = ' + lowValTest1);
        hasFailed = true;
    }

    if (Math.round(boundaryTest1) === 38) {
        console.log("  " + (count++) + ' Boundary Test 1: PASS. params = { 0, 75 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 0, 75 } -> Result = ' + boundaryTest1);
        hasFailed = true;
    }

    if (boundaryTest2 === 95) {
        console.log("  " + (count++) + ' Boundary Test 2: PASS. params = { 100, 90 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 100, 90 } -> Result = ' + boundaryTest2);
        hasFailed = true;
    }

    if (hasFailed) {
        console.log('RESULT: FAILED');
    } else {
        console.log("RESULT : PASSED");
    }

}

/**
 * Tests the getAssignmentWeight function
 */
function testGetAssignmentWeight() {

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

        // test function
        normalValTest = getAssignmentWeight(normalVal, normalVal, normalVal);              // 16
        normalTest2 = getAssignmentWeight(normalVal, normalVal2, normalVal3);              // 13.6

        largeValTest = getAssignmentWeight(largeVal, normalVal, normalVal);                // < 0
        largeValTest2 = getAssignmentWeight(normalVal, largeVal, normalVal);               // < 0

        lowValTest = getAssignmentWeight(normalVal, lowVal, normalVal);                    // < 0
        lowValTest2 = getAssignmentWeight(normalVal, normalVal, lowVal);                   // < 0

        boundaryTest1 = getAssignmentWeight(normalVal2, boundaryValHigh, normalVal2);      // 16.67
        boundaryTest2 = getAssignmentWeight(normalVal, normalVal, boundaryValHigh);        // 17.33
        boundaryTest3 = getAssignmentWeight(boundaryValLow, normalVal, normalVal);         // 10.66
        boundaryTest4 = getAssignmentWeight(normalVal, boundaryValLow, boundaryValLow);    // 5.33

        // Check all of the outputs here
        console.log("\nTESTING FUNCTION: getAssignmentWeight(hw1, hw2, hw3):");

        if(normalValTest === 16) {
            console.log("  " + (count++) + ' Normal Value Test 1: PASS. params = { 80, 80, 80 }');
        } else {
            console.log("  " + (count++) + ' FAIL: params = { 80, 80, 80 } -> Result = ' + normalValTest);
            hasFailed = true;
        }

        if(Math.round(normalTest2) === 14) {
            console.log("  " + (count++) + ' Normal Value Test 2: PASS. params = { 80, 75, 50 }');
        } else {
            console.log("  " + (count++) + ' FAIL: params = { 80, 75, 50 } -> Result = ' + normalTest2);
            hasFailed = true;
        }

        if(largeValTest < 0) {
            console.log("  " + (count++) + ' Large Value Test 1: PASS. params = { 200, 80, 80 }');
        } else {
            console.log("  " + (count++) + ' FAIL: params = { 200, 80, 80 } -> Result = ' + largeValTest);
            hasFailed = true;
        }

        if(largeValTest2 < 0) {
            console.log("  " + (count++) + ' Large Value Test 2: PASS. params = { 80, 200, 80 }');
        } else {
            console.log("  " + (count++) + ' FAIL: params = { 80, 200, 80 } -> Result = ' + largeValTest2);
            hasFailed = true;
        }

        if(lowValTest < 0) {
            console.log("  " + (count++) + ' Low Value Test 1: PASS. params = { 80, 0, 80 }');
        } else {
            console.log("  " + (count++) + ' FAIL: params = { 80, 0, 80 } -> Result = ' + lowValTest);
            hasFailed = true;
        }

        if(lowValTest2 < 0) {
            console.log("  " + (count++) + ' Low Value Test 2: PASS. params = { 80, 80, 0 }');
        } else {
            console.log("  " + (count++) + ' FAIL: params = { 80, 80, 0 } -> Result = ' + lowValTest2);
            hasFailed = true;
        }

        if(Math.round(boundaryTest1) === 17) {
            console.log("  " + (count++) + ' Boundary Test 1: PASS. params = { 75, 100, 75 }');
        } else {
            console.log("  " + (count++) + ' FAIL: params = { 75, 100, 75 } -> Result = ' + boundaryTest1);
            hasFailed = true;
        }

        if(Math.round(boundaryTest2) === 17) {
            console.log("  " + (count++) + ' Boundary Test 2: PASS. params = { 80, 80, 100 }');
        } else {
            console.log("  " + (count++) + ' FAIL: params = { 80, 80, 100 } -> Result = ' + boundaryTest2);
            hasFailed = true;
        }

        if(Math.round(boundaryTest3) === 11) {
            console.log("  " + (count++) + ' Boundary Test 3: PASS. params = { 0, 80, 80 }');
        } else {
            console.log("  " + (count++) + ' FAIL: params = { 0, 80, 80 } -> Result = ' + boundaryTest3);
            hasFailed = true;
        }

        if(Math.round(boundaryTest4) === 5) {
            console.log("  " + (count++) + ' Boundary Test 4: PASS. params = { 80, 0, 0 }');
        } else {
            console.log("  " + (count++) + ' FAIL: params = { 80, 0, 0 } -> Result = ' + boundaryTest4);
            hasFailed = true;
        }

        if (hasFailed) {
            console.log('RESULT: FAILED');
        } else {
            console.log("RESULT : PASSED");
        }

}

/**
 * Tests the getTestWeight function
 */
function testGetTestWeight() {

    // declare variables to test with here
    var normalVal1 = 80;
    var normalVal2 = 70;

    var highVal = 200;
    var lowVal = -100;

    var boundaryHigh = 100;
    var boundaryLow = 0;

    var count = 1;
    var hasFailed = false;

    // Test the function here
    var normalTest1 = getTestWeight(normalVal1, normalVal2);      // 60
    var normalTest2 = getTestWeight(normalVal1, normalVal1);      // 64

    var highTest = getTestWeight(highVal, normalVal1);            // < 0
    var lowTest = getTestWeight(lowVal, normalVal1);              // < 0

    var boundaryTest1 = getTestWeight(boundaryHigh, normalVal1);  // 72
    var boundaryTest2 = getTestWeight(normalVal2, boundaryHigh);  // 68
    var boundaryTest3 = getTestWeight(boundaryLow, normalVal2);   // 28
    var boundaryTest4 = getTestWeight(normalVal1, boundaryLow);   // 32

    console.log("\nTESTING FUNCTION: getTestWeight(test1, test2):");

    // Check that functions returned the expected output
    if (normalTest1 === 60) {
        console.log("  " + (count++) + ' Normal Test 1: PASS. params = { 80, 70 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, 70 } -> Result = ' + normalTest1);
        hasFailed = true;
    }

    if (normalTest2 === 64) {
        console.log("  " + (count++) + ' Normal Test 2: PASS. params = { 80, 80 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, 80 } -> Result = ' + normalTest2);
        hasFailed = true;
    }

    if (highTest < 0) {
        console.log("  " + (count++) + ' High Value Test: PASS. params = { 200, 80 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 200, 80 } -> Result = ' + highTest);
        hasFailed = true;
    }

    if (lowTest < 0) {
        console.log("  " + (count++) + ' Low Value Test: PASS. params = { 80, -100 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, -100 } -> Result = ' + lowTest);
        hasFailed = true;
    }

    if (boundaryTest1 === 72) {
        console.log("  " + (count++) + ' Boundary Test 1: PASS. params = { 100, 80 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 100, 80 } -> Result = ' + boundaryTest1);
        hasFailed = true;
    }

    if (boundaryTest2 === 68) {
        console.log("  " + (count++) + ' Boundary Test 2: PASS. params = { 70, 100 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 70, 100 } -> Result = ' + boundaryTest2);
        hasFailed = true;
    }

    if (boundaryTest3 === 28) {
        console.log("  " + (count++) + ' Boundary Test 3: PASS. params = { 0, 70 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 0, 70 } -> Result = ' + boundaryTest3);
        hasFailed = true;
    }

    if (boundaryTest4 === 32) {
        console.log("  " + (count++) + ' Boundary Test 4: PASS. params = { 80, 0 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, 0 } -> Result = ' + boundaryTest4);
        hasFailed = true;
    }

    // Display whether or not the function failed or passed. 
    if(hasFailed) {
        console.log("RESULT: FAILED");
    } else {
        console.log("RESULT: PASSED");
    }

}

/**
 * Tests the getFinalGrade function
 */
function testGetFinalGrade() {

    //declare HOMEWORK variables
    var lowHWval = -100
    var highHWval = 200

    var normalHWVal = 80;
    var normalHWVal2 = 75;
    var normalHWVal3 = 50;

    var boundaryHWVHigh = 100;
    var boundaryHWLow = 0;
    
    //declare TEST variables
    var lowTestval = -100
    var highTestval = 200

    var normalTestVal1 = 80;
    var normalTestVal2 = 70;

    var boundaryTestHigh = 100;
    var boundaryTestLow = 0;

    var count = 1;
    var hasFailed = false;

   //testing functions for test parameters

    var highTestTest = getFinalGrade(normalHWVal, normalHWVal2, normalHWVal3, highTestval, normalTestVal2);            
    var lowTestTest = getFinalGrade(normalHWVal, normalHWVal2, normalHWVal3, lowTestval, normalTestVal1);   

    var normalTestTest1 = getFinalGrade(normalHWVal, normalHWVal2, normalHWVal3, normalTestVal1, normalTestVal1);
    var normalTestTest2 = getFinalGrade(normalHWVal, normalHWVal2, normalHWVal3, normalTestVal2, normalTestVal2);
    
    var boundaryHighTestTest = getFinalGrade(normalHWVal, normalHWVal2, normalHWVal3, boundaryTestHigh, normalTestVal2);
    var boundaryLowTestTest = getFinalGrade(normalHWVal, normalHWVal2, normalHWVal3, boundaryTestLow, normalTestVal2);

    //testing functions for homework parameters

    var highHWTest = getFinalGrade(normalHWVal, highHWval, normalHWVal3, normalTestVal1, normalTestVal2);
    var lowHWTest = getFinalGrade(normalHWVal, lowHWval, normalHWVal3, normalTestVal1, normalTestVal2);

    var normalHWTest1 = getFinalGrade(normalHWVal, normalHWVal2, normalHWVal3, normalTestVal1, normalTestVal1);
   
    var boundaryHighHWTest = getFinalGrade(boundaryHWVHigh, normalHWVal2, normalHWVal3, normalTestVal1, normalTestVal2);
    var boundaryLowHWTest = getFinalGrade(boundaryHWLow, normalHWVal2, normalHWVal3, normalTestVal1, normalTestVal2);

    console.log("\nTESTING FUNCTION: getFinalGrade(hw1, hw2, hw3, test1, test2):");
    console.log("\nTesting Parameters: test1 and test2")
    if (highTestTest === "[!] ERROR: All values must be between 0 and 100.") {
        console.log("  " + (count++) + ' High Value Test: PASS. params = { 80, 75, 50, 200, 70 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, 75, 50, 200, 70 } -> Result = ' + highTestTest);
        hasFailed = true;
    }

    if (lowTestTest === "[!] ERROR: All values must be between 0 and 100.") {
        console.log("  " + (count++) + ' Low Value Test: PASS. params = { 80, 75, 50, 80, -100 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, 75, 50, 80, -100 } -> Result = ' + lowTestTest);
        hasFailed = true;
    }

    if (normalTestTest1 === 78) {
        console.log("  " + (count++) + ' Normal Value Test 1: PASS. params = { 80, 75, 50, 80, 80 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, 75, 50, 80, 80 } -> Result = ' + highTestTest);
        hasFailed = true;
    }

    if (normalTestTest2 === 70) {
        console.log("  " + (count++) + ' Normal Value Test 2: PASS. params = { 80, 75, 50, 70, 70 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, 75, 50, 70, 70 } -> Result = ' + lowTestTest);
        hasFailed = true;
    }

    if (boundaryHighTestTest === 82) {
        console.log("  " + (count++) + ' Boundary Test 1: PASS. params = { 80, 75, 50, 100, 80 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, 75, 50, 100, 80 } -> Result = ' + highTestTest);
        hasFailed = true;
    }

    if (boundaryLowTestTest === 42) {
        console.log("  " + (count++) + ' Boundary Test 2: PASS. params = { 80, 75, 50, 0, 70 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, 75, 50, 0, 70 } -> Result = ' + lowTestTest);
        hasFailed = true;
    }

    console.log("\nTesting Parameters: hw1, hw2 and hw3")

    if (highHWTest === "[!] ERROR: All values must be between 0 and 100.") {
        console.log("  " + (count++) + ' High Value Test: PASS. params = { 80, 200, 50, 80, 70 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, 200, 50, 80, 70 } -> Result = ' + highTestTest);
        hasFailed = true;
    }

    if (lowHWTest === "[!] ERROR: All values must be between 0 and 100.") {
        console.log("  " + (count++) + ' Low Value Test: PASS. params = { 80, -100, 50, 80, 70 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, -100, 50, 80, -100 } -> Result = ' + lowTestTest);
        hasFailed = true;
    }

    if (normalHWTest1 === 78) {
        console.log("  " + (count++) + ' Normal Value Test 1: PASS. params = { 80, 75, 50, 80, 80 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 80, 75, 50, 80, 80 } -> Result = ' + highTestTest);
        hasFailed = true;
    }
 
    if (boundaryHighHWTest === 75) {
        console.log("  " + (count++) + ' Boundary Test 1: PASS. params = { 100, 75, 50, 80, 70 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 100, 75, 50, 80, 70 } -> Result = ' + highTestTest);
        hasFailed = true;
    }

    if (boundaryLowHWTest === 68) {
        console.log("  " + (count++) + ' Boundary Test 2: PASS. params = { 0, 75, 50, 80, 70 }');
    } else {
        console.log("  " + (count++) + ' FAIL: params = { 0, 75, 50, 80, 70 } -> Result = ' + lowTestTest);
        hasFailed = true;
    }


    // Display whether or not the function failed or passed. 
    if(hasFailed) {
        console.log("RESULT: FAILED");
    } else {
        console.log("RESULT: PASSED");
    }

}

//var prompt = require('fs');
var prompt = require('prompt');
var schema = {
   properties: {
    
     hw1: { 
       pattern: /^[0-9]\d*(\.\d+)?$/,
       message: 'Grade must be postive number',
       required: true,
       type: 'number'
     },
     hw2: { 
       pattern: /^[0-9]\d*(\.\d+)?$/,
       message: 'Grade must be postive number',
       required: true,
       type: 'number'
     },
     hw3: { 
       pattern: /^[0-9]\d*(\.\d+)?$/,
       message: 'Grade must be postive number',
       required: true,
       type: 'number'
     },
     exam1: { 
       pattern: /^[0-9]\d*(\.\d+)?$/,
       message: 'Grade must be postive number',
       required: true,
       type: 'number'
     },
     exam2: { 
       pattern: /^[0-9]\d*(\.\d+)?$/,
       message: 'Grade must be postive number',
       required: true,
       type: 'number'
     }
     
   }
 };

prompt.get(schema, function (err, result) {

    //console.log(' HW1: ' + result.hw1);
    //console.log(' HW2: ' + result.hw2);
    //console.log(' HW3: ' + result.hw3);
    //console.log(' exam1: ' + result.exam1);
    //console.log(' exam2: ' + result.exam2);

    var finalGrade = getFinalGrade(result.hw1, result.hw2, result.hw3, result.exam1, result.exam2);
    printFinalGrade(finalGrade);


    testAverageHomework();
    testAverageTest();
    testGetAssignmentWeight();
    testGetTestWeight();
    testGetFinalGrade();

});

prompt.start();
