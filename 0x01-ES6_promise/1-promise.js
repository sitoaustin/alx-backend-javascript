export default function getResponseFromAPI(passed) {
    return new Promise((resolve, reject) => {
      if (!passed) {
        reject(new Error('The fake API is not working currently'));
      } else {
        resolve({
          status: 200,
          body: 'Success',
        });
      }
    });
  }
  