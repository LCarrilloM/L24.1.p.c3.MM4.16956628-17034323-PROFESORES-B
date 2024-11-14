/*4. PROFESORES-B
En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente,
3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su nombre y sexo (F
- M).
Considerando que los datos de los profesores se cargan en un array de objetos (Ej.
estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que
retorne el porcentaje de profesores de un sexo y una categoría dada.

Función:     porcProfesSexoEnCategoria.
Parámetros:  profesores (array de objetos profesor), categoria (un número), sexo (una letra).
Retorno:     el porcentaje de profesores de un sexo dado en la categoría indicada.
Condiciones: debe usarse la función profesoresCategoria del ejercicio anterior.
*/


    let profesores = [
        { categoria:1, cedula:111, nombre: "Ana", sexo: "F" },
        { categoria:2, cedula:222, nombre: "Leo", sexo: "M" }, 
        { categoria:1, cedula:333, nombre: "Mia", sexo: "M" }, 
        { categoria:2, cedula:444, nombre: "Luis", sexo: "M" }
    ];
    
    let categorias = ["Instructor", "Asistente", "Agregado","Asociado","Titular"];

    let profesoresCategoria = (profesores,categoria) => {
        let profesoresFiltrados = [];
        let categoriaDeFiltrado = 0;
        profesores.forEach((profesores) => {
            if (profesores.categoria == categoria) {
                profesoresFiltrados.push(profesores);
                categoriaDeFiltrado = categoria;
            }
        });
        return [profesoresFiltrados,categoriaDeFiltrado];
    }
    
    let porcProfesSexoEnCategoria = (profesores, categoria, sexo) => { 
        let contProfesSexo = 0;
        let [profesoresCC,filtrado] = profesoresCategoria (profesores, categoria);
        for( let i=0; i< profesores.length; i++){
            if(profesores[i].sexo= sexo && profesores[i].categoria == categoria) contProfesSexo++;
        }
        return [contProfesSexo/profesoresCC.length*100,sexo,filtrado];
    };

    let salida = document.getElementById("salida");

    let [porcentajeProfes,sexo,filtrado] = porcProfesSexoEnCategoria (profesores, 2, "F"); 

    //salida.innerHTML = `Profesores por categoría ${categorias[filtrado-1]}<br>`;
    //profesoresC.forEach((profesor) => {
    //salida.innerHTML += `Nombre: ${profesor.nombre}<br>`});
    salida.innerHTML = `El porcentaje de profesores de sexo ${sexo} en la categoría ${categorias[filtrado-1]} es de ${porcentajeProfes}<br>`;
