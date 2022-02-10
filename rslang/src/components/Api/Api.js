const serverName = 'https://react-learnwords-example.herokuapp.com/';

export const getChunkOfWords = async (group, page) => {
  const response = await fetch(`${serverName}words?group=${group}&page=${page}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}
