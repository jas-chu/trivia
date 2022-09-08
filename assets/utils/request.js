const url = "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"

function createRequest(url) {
  let requestOptions = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }
  return new Request(url, requestOptions)
}

function fetchPromise(request) {
  return new Promise((resolve, reject) => {
    fetch(request)
      .then((response) => {
        if (response.status === 200) {
          response.json().then((responseJson) => {
            resolve(responseJson)
          })
        } else if (response.status === 408) {
          reject('networkError')
        } else {
          reject('serverError')
        }
      })
      .catch(() => {
        reject('serverError')
      })
  })
}

export function getQuestions(){
  return new Promise((resolve, _) => {
    let request = createRequest(url)
    resolve(fetchPromise(request))
  })
}