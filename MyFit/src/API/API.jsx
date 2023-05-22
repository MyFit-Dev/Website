class server_url {
  base_url = "https://localhost:7169/api/Plan/";
  constructor(path) {
    this.path = path;
  }
}

URL = new server_url("getAll");
console.log(URL);
export function getAllData() {}
