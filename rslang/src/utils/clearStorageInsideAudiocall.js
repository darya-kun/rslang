function clearStorageInsideAudiocall() {
  localStorage.setItem('wordsArr', []);
  localStorage.setItem('answer', '');
  localStorage.setItem('audiocallAnswer', '');
}

export default clearStorageInsideAudiocall;