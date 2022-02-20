import getRandomArr from "../utils/getRandomArr";
import getRandom from "../utils/getRandom";
import clearStorageFromAudiocallData from '../utils/clearStorageFromAudiocallData';

export function AudiocallGame() {
  clearStorageFromAudiocallData();
  const num = getRandom(0, 19);
  const arr = getRandomArr(num);

  localStorage.setItem('wordsArr', JSON.stringify(arr));
  localStorage.setItem('answer', num);
}