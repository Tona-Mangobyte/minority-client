export default function ({ $http }: any) {
  $http.setHeader('accept', 'application/json;api.v=1')
  $http.setHeader('x-api-key', 'appminorityjK8pdELTQfz6mQNsHIpyvprf3Q9Dc9a1')
  $http.onRequest((config: any) => {
    $http.setHeader('accept', 'application/json;api.v=1')
    $http.setHeader('x-api-key', 'appminorityjK8pdELTQfz6mQNsHIpyvprf3Q9Dc9a1')
    console.log('Making request to ' + config.url)
  })

  $http.onError((error: any) => {
    if (error.statusCode === 500) {
      console.error('Request Error!')
    }
    console.error(error)
  })
}
