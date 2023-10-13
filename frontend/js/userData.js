async function fetchUserData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Cannot fetch user data from: ${url}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}

async function postFetchedData(api) {
  try {
    const data = await fetchUserData('https://jsonplaceholder.typicode.com/users/');
    const requestHeader = {
      method : 'POST',
      body : JSON.stringify(data),
      headers : {
        'Content-Type' : 'application/json'
      }
    }
    const response = await fetch(api, requestHeader);
    if(!response.ok){
      throw new Error(`Cannot Post fetched data`)
    }
    const result = await response.json();
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

postFetchedData('http://localhost:8083/api/userData');
