export function getRandom(answer) {
 
  let arr = [answer];
  while(arr.length < 5){
    let r = Math.floor(Math.random() * 19) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
  }
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr
}

export default getRandom;