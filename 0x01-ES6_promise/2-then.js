export default async function handleResponseFromAPI(passed) {
  const newPromise = new Promise((resolve, reject) => {
    if (!passed) {
      reject(new Error(''));
    } else {
      resolve({
        status: 200,
        body: 'Success',
      });
    }
  });
  newPromise.then((res) => console.log(('Got a response from the API')));
}
