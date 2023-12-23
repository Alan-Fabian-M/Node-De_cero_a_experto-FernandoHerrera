const http = require('http')


http.createServer((req,res)=> {
     
    // res.writeHead(201, { 'content-Type':'application/plain'});
    res.writeHead(201, { 'content-Type':'application/csv'});

    const persona = {
        id: 1,
        nombre: 'Fernando'
    };

    res.write('404 | page not found');
    res.end();

})
.listen( 8080 );

console.log('Escuchando el puerto', 80800)

