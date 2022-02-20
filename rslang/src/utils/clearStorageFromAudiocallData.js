function clearStorageFromAudiocallData() {
  localStorage.setItem('selectedLevel', '');
  localStorage.setItem('selectedIndexLevel', '');
  localStorage.setItem('wordsArr', []);
  localStorage.setItem('answer', '');
  localStorage.setItem('audiocallAnswer', '');
}

export default clearStorageFromAudiocallData;