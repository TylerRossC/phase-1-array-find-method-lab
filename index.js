//The function should receive 1 argument, an Array of JavaScript Objects +
//Each object has two properties: year and result
//It should use find() to test each Object to see if the result is "W" — a win!
//It should return the year when the win occurred (if it occurred at all!)
//If no win is found, it should return, sadly, undefined
function superbowlWin(record) {
    const win = record.find(function(element){
        return element.result === "W"
    }) 
    return win === undefined ? undefined : win.year
}  
