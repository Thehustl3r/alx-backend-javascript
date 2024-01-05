function getResponseFromAPI() {
    return Promise.resolve({
      body: 'A promise kept',
    });
  }
  
  export default getResponseFromAPI;