import getRandomArr from "../utils/getRandomArr";
import getRandom from "../utils/getRandom";

export function AudiocallGame() {
  localStorage.clear()
  const num = getRandom(0, 19);
  const arr = getRandomArr(num);

  const res = [num, arr];
  //const [isAvailable, setAvailable] = useState(false);
  


  console.log(res)
}