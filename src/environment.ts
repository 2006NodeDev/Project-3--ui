export let acBaseUrl:string

if(process.env['NODE_ENV'] === 'production'){
    //domain name goes here
    acBaseUrl = ''
}else {
    //will need to adjust for nginx/multiple servers
    acBaseUrl = 'http://localhost:2006'
}