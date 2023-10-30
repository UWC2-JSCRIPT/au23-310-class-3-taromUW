// Create a function testPhoneNumber 
// takes in a phoneNumber string in one of these formats:
// '(206) 333-4444'
// '206-333-4444'
// '206 333 4444'
// Returns true if valid, false if not valid


function testPhoneNumber(phoneNumber)
{
    const phoneNumRegex = /^[\(]?\d{3}[\)]?[-\s]\d{3}[-\s]\d{4}$/;
    
  return phoneNumRegex.test(phoneNumber);
}


// Explanation of RegExp
// ^      start of line
// \(     optional start parenthesis
// \d{3}  exactly 3 digit characters
// \)     optional end parenthesis
// [-\s]  one of a space or a dash
// \d{3}  exactly 3 digit characters
// [-\s]  one of a space or a dash
// \d{4}  exactly 4 digit characters
// $      end of line

// check testPhoneNumber
console.log(testPhoneNumber('(206) 333-4444')); // should return true
console.log(testPhoneNumber('(206) 33-4444')); // should return false, missing a digit


// 1. Create a function parsePhoneNumber that takes in a phoneNumber string 
// in one of the above formats.  For this, you can *assume the phone number
// passed in is correct*.  This should use a regular expression
// and run the exec method to capture the area code and remaining part of
// the phone number.
// Returns an object in the format {areaCode, phoneNumber}

function parsePhoneNumber(phoneNumber)
{
    let result1, result2

    const myRegexpArea = /^[(]?\d{3}[)]?/g;
    const myRegexpBody = /\d{3}[-\s]\d{4}$/g;
    result1 = myRegexpArea.exec(phoneNumber)
    //console.log(result1);
    result2 = myRegexpBody.exec(phoneNumber)
    //console.log(result2);

    return {arecode: result1[0].replace('(', '').replace(')', ''), phoneNumber: result2[0].replace('-', '')};
}

// Check parsePhoneNumber
console.log(parsePhoneNumber('206-333-4444'));
// returns {areaCode: '206', phoneNumber: '3334444'}

console.log(parsePhoneNumber('(222) 422-5353'));
// returns {areaCode: '222', phoneNumber: '4225353'}