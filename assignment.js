/**
 * @ Mostafizur Rahman
 * @ dev.mostafizur@gmail.com
 * @ Github UserName: perfectionist1
 * @ Ripository Link: https://github.com/perfectionist1/javascript-first-assignment
 * 
 * :::::::: A S S I G N M E N T - 3 :::::::::::::::
 * 
 * 
 * Part-1 
 * ::::::::::::::::::::::::::::::::::::::::::::::::
 *      Conversion from Feet to Mile
 * ::::::::::::::::::::::::::::::::::::::::::::::::
 */
function feetToMile(userInputFeet){
    // 1 meter = 3.28 feet
    // 1 mile = 1852 meter
    let checkedInputValue = Math.sign(userInputFeet);
    if(checkedInputValue == 0 || checkedInputValue == -1){
        return "Dear User, Please input positive figure to calculate feet to Mile conversion. You've given: " + userInputFeet;
    } else{
        var resultInMile = userInputFeet/(3.28*1852);  
        return resultInMile; 
    }     
}
var finalResultInMile = feetToMile(-15000);
    if(typeof finalResultInMile != 'string'){
        console.log("Your calculated converted MILES is: " + finalResultInMile);
    }else{
        console.log(finalResultInMile);
    }


 /** Part-2
 * ::::::::::::::::::::::::::::::::::::::::::::::::
 *      Calculation of Wood
 * ::::::::::::::::::::::::::::::::::::::::::::::::
 */ 
function woodCalculator(numOfChair, numOfTable, numOfBed){
    // 1 Chair = 1 cubicfeet wood
    // 1 Table = 3 cf wood
    // 1 Bed   = 5 cf wood  
    let checkedInputValOfChair = Math.sign(numOfChair); 
    let checkedInputValOfTable = Math.sign(numOfTable);
    let checkedInputValOfBed   = Math.sign(numOfBed);
    if(checkedInputValOfChair == -1 || checkedInputValOfTable == -1 || checkedInputValOfBed == -1){
        return "Dear User, Please input positive figure to calculate. You have given the following figure: Chair = "+numOfChair + ", Table = "+numOfTable + ", & Bed = "+ numOfBed;
    } else{
        let woodForChair = numOfChair*1;
        let woodForTable = numOfTable*3;
        let woodForBed   = numOfBed*5;
        let totalWood = woodForChair + woodForTable + woodForBed;
        return totalWood;
    }    
}

    let finalResultInWood = woodCalculator(2, 5, 2);
    if(typeof finalResultInWood != 'string'){
        console.log("Your total CALCULATED WOOD in cubic feet is: "+finalResultInWood);
              
    }else{
        console.log(finalResultInWood);
    }
        
 /** Part-3
 * ::::::::::::::::::::::::::::::::::::::::::::::::
 *      Calculation of Brick
 * ::::::::::::::::::::::::::::::::::::::::::::::::
 */
function brickCalculator(desiredFloorNumbers){
    // 1st floor to 10th floor should be calculated as 15 feet height.
    // 11th floor to 20th floor should be calculated as 12 feet height.
    // 21st to rest of the height should be calculated as 10 feet height
    // Each (1) feet of construction work requires 1000 bricks.

    //let desiredFloorNumbers = parseInt(DesiredFloorNumbers);
    let checkedForInteger = desiredFloorNumbers % 1;
    let checkedInputFloorsNumber = Math.sign(desiredFloorNumbers);
    if(checkedInputFloorsNumber == 0 || checkedInputFloorsNumber == -1 || checkedForInteger !== 0){
        return "Please input positive full integer value to calculate your total Bricks needed. You have given " + desiredFloorNumbers;
    }else{
        if(desiredFloorNumbers <= 10){
            let totalBricks = desiredFloorNumbers*15*1000
            return totalBricks;
        } else if(desiredFloorNumbers >= 11 && desiredFloorNumbers <=20){
            let calcInputNum = desiredFloorNumbers - 10;
            let totalBricks = 10*15*1000 + calcInputNum*12*1000;
            return totalBricks;
        }else{
            let calcInputNum = desiredFloorNumbers - 20;
            let totalBricks = 10*15*1000 + 10*12*1000 + calcInputNum*10*1000;
            return totalBricks;
        }
    }
}
let resultOfNeededBricks = brickCalculator(18);
    if(typeof resultOfNeededBricks != 'string'){
        console.log(resultOfNeededBricks + " BRICKS NEEDED To make your Building!");
    }else{
        console.log(resultOfNeededBricks);
    }

 /** Part-4
 * ::::::::::::::::::::::::::::::::::::::::::::::::
 *      Selecting Tiny Friend's Name 
 * ::::::::::::::::::::::::::::::::::::::::::::::::
 */
function tinyFriend(arrayOfFriendsName){
    if( arrayOfFriendsName !== '' ){
        let uniqueFriend = arrayOfFriendsName[0];
        for(var i = 0; i < arrayOfFriendsName.length; i++){
            let myFriend = arrayOfFriendsName[i];
            if(myFriend.length < uniqueFriend.length){
                uniqueFriend = myFriend;
            }
        }
        return "Your little named friend is: " + uniqueFriend;
    }else{
        return "Please input your friends name to compare the little named one";
    }
}
let friendsName = ["Abdullah", "Shawon", "Mostafizur", "Alvi", "Ali"];
let emptyFriend = '';
let findTinyFriend = tinyFriend(friendsName);
    console.log(findTinyFriend);

