const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Alan'
    },
    {
        id: 3,
        nombre: 'Fer'
    },
];  


const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];  


const getSalario = (id, callback) => {
    const salario = salarios.find( e => e.id == id)?.salario;

    if(salario){
        callback(null, salario);
    }else{
        callback(`El salario con el id ${id} no existe`);
    }

};


const getEmpleado =(id, callback) =>{

    const empleado = empleados.find(e =>e.id == id );

    if(empleado){
        callback(null, empleado);
    }else{
        callback(`Empleado con id ${id} no existe`);
    }

}


const id = 1;


getEmpleado(id, ( err ,empleado )=>{
    
    if(err){
        console.log('Error');
        return console.log(err);
    }

    getSalario(id, (err , salario)=> {
        if(err){
            return console.log(err);
        }
        console.log('El empleado:', empleado.nombre, 'Tiene un salario de:' , salario );

    }  )
    
});






