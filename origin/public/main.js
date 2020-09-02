console.log('这是获取页面')

function jsonp(path) {
  return new Promise((resolve, reject) => {
    const random = 'callback' + Math.random()
    window[random] = data => {
      resolve(data)
    }
    const script = document.createElement('script')
    script.src = `${path}?callback=${random}`
    script.onload = () => {
      script.remove()
      delete window[random]
    }
    script.onerror = () => {
      reject()
    }
    document.body.appendChild(script)
  })
}

function ajax(method, path) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.open(method, path)
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 300) {
          resolve(request.response)
        } else {
          reject(request)
        }
      }
    }
    request.send()
  })
}

jsonp('http://localhost:8888/target.js').then(res => console.log('jsonp的返回值', res))

ajax('GET', 'http://localhost:8888/target.json').then(res => console.log('ajax的返回值', res))
