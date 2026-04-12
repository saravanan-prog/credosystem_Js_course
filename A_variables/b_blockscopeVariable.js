/**
 *  let - block scope
 *      - cannot re-declare
 *      - but allow re-assign
 */

let bottle = "juice"
// let bottle = "oil"

bottle = "oil" /* re-assign */


console.log("bottle ====>",bottle)