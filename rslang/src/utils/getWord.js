import Service from '../components/Api/Api';


async function getWord(level, item) {
  const temp = new Service()
  try {
    const res = await temp.getChunkWords( level, '5');
    const obj = res[item];
    return obj;
  } catch (err) {
      console.log(err);
  }
}

export default getWord;