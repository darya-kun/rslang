export default class Service {
  _apiBase = 'https://react-learnwords-example.herokuapp.com/';

  async getChunkWords (group, page){
    const response = await fetch(`${this._apiBase}words?group=${group}&page=${page}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  };

  async getWords (id){
    const response = await fetch(`${this._apiBase}words/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  };

  async createUser(user) {
    const response = await fetch(this._apiBase + 'users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    });
    return await response.json();
  };

  async getUser (id){
    const response = await fetch(`${this._apiBase}users/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  };

  async getImage (urlPart){
    const response = await fetch(`${this._apiBase}${urlPart}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'image/jpeg',
      },
    });
    const blob = await response.blob()
    return [URL.createObjectURL(blob), null]
  };

/*  async updateUser (id){
    const user = {
      username,
      email,
      password,
    };
    await fetch(`${this._apiBase}users/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  };

  async deleteUser (id) {
    await fetch(`${this._apiBase}users/${id}`, { method: 'DELETE' });
  };

  async getUserTokens (id){
    const response = await fetch(`${this._apiBase}users/${id}/tokens`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  };

  async getUserWords (id){
    const response = await fetch(`${this._apiBase}users/${id}/words`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  };

  async createUserWords(id, wordId) {
    const response = await fetch(`${this._apiBase}users/${id}/words/${wordId}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id, wordId)
    });
    return await response.json();
  };

  async getUserWordById (id, wordId){
    const response = await fetch(`${this._apiBase}users/${id}/words/${wordId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  };

  async updateUserWord (id, wordId){
    const words = {
      difficulty,
      optional,
    };
    await fetch(`${this._apiBase}users/${id}/words/${wordId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(words),
    });
  };

  async deleteUserWords (id, wordId) {
    await fetch(`${this._apiBase}users/${id}/words/${wordId}`, { method: 'DELETE' });
  };

  async getUserWordById (id, group, page, wordsPerPage, filter){
    const response = await fetch(`${this._apiBase}users/${id}/aggregatedWords?group=${group}&page=${page}$wordsPerPage=${wordsPerPage}&filter=${filter}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  };

  async getUserWordById (id, wordId){
    const response = await fetch(`${this._apiBase}users/${id}/aggregatedWords/${wordId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  };

  async getUserStatisticById (id){
    const response = await fetch(`${this._apiBase}users/${id}/statistics`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  };

  async updateUserStatistics (id){
    const statistics = {
      learnedWords,
      optional,
    };
    await fetch(`${this._apiBase}users/${id}/statistics`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(statistics),
    });
  };

  async getUserSettingsById (id){
    const response = await fetch(`${this._apiBase}users/${id}/settings`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  };

  async updateUserSettings (id){
    const settings = {
      wordsPerDay,
      optional,
    };
    await fetch(`${this._apiBase}users/${id}/settings`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(settings),
    });
  };

  async signIn(user) {
    const response = await fetch(this._apiBase + 'signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    });
    return await response.json();
  };*/
};