const http = require('http')


http.createServer((req,res)=> {
     
    // res.writeHead(201, { 'content-Type':'application/json'});
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(201, { 'content-Type':'application/csv'});

    // const persona = {
    //     id: 1,
    //     nombre: 'Fernando'
    // };

    res.write('id, nombre\n');
    res.write('1, Fernando\n');
    res.write('2, Maria\n');
    res.write('3, Juan\n');
    res.write('4, Pedro\n');


    res.end();
 
})
.listen( 8080 );

console.log('Escuchando el puerto', 80800)

