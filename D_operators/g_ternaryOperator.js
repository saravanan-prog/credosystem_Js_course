    /*** 
     *   Ternary Operator - similar as if else condition.
     *     
     *    ?  True Block    :  False Block
     **/
    
    // Example 1 
    const age = 2;
    const voterResult = (age >= 18) ? "elgible" : "Not-Eligible"


    //Example 2

    const studentMark = 15
    const result = (studentMark > 90 ) ?
                    "First class"
                 :
                  (studentMark > 80) ?
                     "Second class"
                 :
                    (studentMark > 70) ?
                      "Thrid class" 
                 :
                    (studentMark > 35) ?
                      "PASS"
                 :
                   "Fail"
                     
                   

    console.log(result);