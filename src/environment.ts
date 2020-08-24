export let acBaseUrl:string
export let pcBaseUrl:string

if(process.env['NODE_ENV'] === 'production'){
    //domain name goes here
    acBaseUrl = ''
}else {
    //will need to adjust for nginx/multiple servers
    acBaseUrl = 'http://localhost:2006'
}

if(process.env['NODE_ENV'] === 'production'){
    //domain name goes here
    pcBaseUrl = ''
}else {
    //will need to adjust for nginx/multiple servers
    pcBaseUrl = 'http://localhost:2007'
}