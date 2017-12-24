class Remote {
  constructor(url, opt) {
    this._url = url
    this._options = {
      ...{
        method: 'GET',
        headers: new Headers({'Content-Type': 'application/json'})
      },
      ...opt
    };
  }

  fetch() {
    return fetch(this._url, this._options);
  }
}

export default Remote