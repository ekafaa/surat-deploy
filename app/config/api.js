export async function fetchApi(url, option) {
    console.log(url);
    console.log(option);
    return await fetch(url, option)
      .then((response) => {
        if (response.status === 500) {
          throw new Error("Error Internal Server");
        } else if (response.status === 400) {
          throw new Error("Error API response");
        } else if (response.status === 401) {
          throw new Error("Error Unauthorized or Token Expired");
        } else if (response.status !== 200) {
          throw new Error("Error API fetch data");
        }
        return response.json()
      })
  }
  