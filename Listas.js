let array = ["Tomate", "Papa", "Carne", "Leche", "Jugo de naranja"];
console.log(array);

array.push("Aceite de Girasol");
console.log(array)

array.pop();
console.log(array);

const ListaPeliculas = [
    {Pelicula: "Smile", Director: "Parker Finn", Fecha: "30 de septiembre de 2022" },
    {Pelicula: "No respires", Director: "Federico Álvarez", Fecha: "8 de septiembre de 2016" },
    {Pelicula: "Tren Bala", Director: "David Leitch", Fecha: "5 de agosto de 2022" },
]

const array1 = ["30 de septiembre de 2022", "8 de septiembre de 2016", "5 de agosto de 2022"];
const fechaPeliculas = ListaPeliculas.filter(Pelicula => { 
    if (Pelicula.Fecha > "1 de agosto de 2010"){
        return true
    } else {
        return false
    }
})
console.log(fechaPeliculas);



const array2 = ["Parker Finn", "Federico Álvarez", "David Leitch",]
console.log(array2);

const val = array2.forEach(v => {
    console.log(v);
    return 3
})
console.log(val)

const newArray = array2.map((valor, indice) => '${indice + 1} - ${valor}')
console.log(array2)

const array3 = ["Smile", "No respires", "Tren Bala"]
console.log(array3)

const val1 = array3.forEach(v => {
    console.log(v)
    return 3
})
console.log(val);

const NewArray = array3.map((valor, indice) => '${indice + 1} - ${valor}')
console.log(array3)

console.log(array2.concat(array3))

const array4 = [...array2, ...array3]
console.log(array4);



