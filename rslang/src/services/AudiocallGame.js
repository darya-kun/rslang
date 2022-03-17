import getRandomArr from "../utils/getRandomArr";
import getRandom from "../utils/getRandom";
import clearStorageInsideAudiocall from '../utils/clearStorageInsideAudiocall';

export function AudiocallGame() {
  clearStorageInsideAudiocall();
  const num = getRandom(0, 19);
  const arr = getRandomArr(num);

  localStorage.setItem('wordsArr', JSON.stringify(arr));
  localStorage.setItem('answer', num);
}