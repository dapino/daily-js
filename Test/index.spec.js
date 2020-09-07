import { obtenerNombres, obtenerAlgo, obtenerEdad} from "../src/lib/index";

const arrObject = [{
  name: 'Ana',
  age: 'Veinticuatro'
},
{
  name:'Cami',
  age: 23
},
{
name: 'Aleja',
age: 26
},
{
  name: 'Aleja 2',
  age: 24
},
{
  name: 'Dani',
  age: 24
},
{
  name: 'Pau',
  age: 25
}];

const arrNames = ['Ana', 'Cami', 'Aleja', 'Aleja 2', 'Dani', 'Pau']
const arrAge = ['Veinticuatro', 23, 26, 24, 24, 25]


describe('obtenerNombres', () => {
  it('debería ser una función', () => {
    expect(typeof obtenerNombres).toBe('function');
  });
  test('deberia devolver un array de cadena', () => {
    expect(obtenerNombres(arrObject)).toEqual(arrNames);
  });
});

describe('Obtener Edad' , () =>{
  it ('deberia devolver un array de cadena', () => {
    expect(obtenerEdad(arrObject)).toEqual(arrAge); 
  })
})

describe('Obtener Algo', () => {
  it('debería ser una función', () => {
    expect(typeof obtenerAlgo).toBe('function');
  });

  test('debería devolver un array de cadena con la edad', () => {
    expect(obtenerAlgo(arrObject, 'age')).toEqual(arrAge);
  });



















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































  test('debería devolver un array de cadena con los nombres', () => {
    expect(obtenerAlgo(arrObject, 'name')).toEqual(arrNames);
  });
})