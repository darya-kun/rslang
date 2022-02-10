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

  async updateUser (id){

    const user = {
      name,
      email,
      password,
    };
    
    const response = await fetch(`${this._apiBase}users/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    });
  };
};