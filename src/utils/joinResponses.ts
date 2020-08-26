export function joinResponses(skillArray:[], yearArray:[], quarterArray:[] ){
let joinedArray = skillArray.concat(yearArray.concat(quarterArray))
return joinedArray
}