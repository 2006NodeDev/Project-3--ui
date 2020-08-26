export let acBaseUrl:string

if(process.env['NODE_ENV'] === 'production'){
    //Ingress's IP goes here
    acBaseUrl='http://35.245.104.196'
}else {
    //adjusted for nginx/multiple servers
    acBaseUrl='http://localhost:80'
}