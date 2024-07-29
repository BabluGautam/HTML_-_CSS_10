let lowers = (Array) => {
  let upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let low = "abcdefghijklmnopqrstuvwxyz";

  let res = [];
  for (i = 0; i < Array.length; i++) {
    let str = "";
    for (j = 0; j < Array[i].length; j++) {
      for (k = 0; k < upp.length; i++) {
        if(Array[i][j]===upp[k]){
str+=low[k]
        }
        else if (arr[i][j] === low[k]){
            str+=low[k]

        }
      }
    }
  }
  res.push(str)
  return res
};
let ans= ["MA", "SA", "I", "SCH", "OOL"]

console.log(lowers(ans))
