
    let Persona = function (celular,nombre,edad){
        
        this.nombre=nombre;
        this.celular=celular;
        this.edad=edad;
        this.info = function () {
            return this.nombre + "\n ID del producto:"

          }

          this.infoHtml = function () {

                  return "<br>Nombre: " + this.nombre +
              "<br>Celular: " + this.celular +"<br>Edad:"+this.edad;

          } 

          this.infoHtml2 = function () {

                   return "<br>Nombre: " + this.nombre +
              "<br>Celular: " + this.celular +"<br>Edad:"+this.edad;

          }

          this.infoHtml3 = function () {

                   return "<br>Nombre: " + this.nombre +
              "<br>Celular: " + this.celular +"<br>Edad:"+this.edad;

          }

    }
    


let Grupo = function () {
    this.datos = new Array();
        this.agregar = function (nuevo) {
        
        this.datos.push(nuevo);
  }

  this.listar = function () {
    let res = "";
    for (let i = 0; i < this.datos.length; i++)
      res += this.datos[i].infoHtml() + "<br>"
    return res;

  }

  this.datos2 = new Set();
        this.agregar2 = function (nuevo) {
        
        this.datos2.add(nuevo);
  }

  this.listar2 = function () {
    let res = "";
    let myarray=([...this.datos2]);
    for (let i = 0; i <myarray.length; i++)
      res += myarray[i].infoHtml() + "<br>"
    return res;

  }

    this.datos3 = new Map();
        this.agregar3 = function (nuevo) {
        
                 this.datos3.set(b1.celular,b1);
               this.datos3.set(b2.celular,b2);
              this.datos3.set(b3.celular,b3);
             this.datos3.set(b4.celular,b4);
   this.datos3.set(b5.celular,b5);
        
  }
  
  this.listar3 = function () {
    let res = "";
    for (let i = 0; i < this.datos3; i++)
      res += this.datos3.get(b[i].celular).infoHtml3() + "<br>"
    return res;

  }


   
}

                let grupo2c = new Grupo();
               let a1=new Persona('111','Alan',10);
              let a2=new Persona('222','Beto',20);
             let a3=new Persona('333','Carlos',30);
           let a4=new Persona('444','David',40);
         let a5=new Persona('555','Efrain',50);

              grupo2c.agregar(a1); 
             grupo2c.agregar(a2); 
            grupo2c.agregar(a3); 
              grupo2c.agregar(a4); 
               grupo2c.agregar(a5); 
                console.log(grupo2c ); 
                console.log(grupo2c.datos ); 
                  console.log(grupo2c.datos2 ); 
                     console.log(grupo2c.datos3); 
         
         
         
          grupo2c.agregar2(a1);
            grupo2c.agregar2(a2);
             grupo2c.agregar2(a3);
            grupo2c.agregar2(a4);
                grupo2c.agregar2(a5);
   
 let b1={celular:'111',nombre:'Alan',edad:10};
   let b2={celular:'222',nombre:'Beto',edad:20};
    let b3={celular:'333',nombre:'Carlos',edad:30};
     let b4={celular:'444',nombre:'David',edad:40};
       let b5={celular:'555',nombre:'Efrain',edad:50};

 grupo2c.agregar3(b1.celular,b1.celular+b1.nombre+b1.edad);
  grupo2c.agregar3(b2.celular,b2.celular+b2.nombre+b2.edad);
  grupo2c.agregar3(b3.celular,b3.celular+b3.nombre+b3.edad);
     grupo2c.agregar3(b4.celular,b4.celular+b4.nombre+b4.edad);
         grupo2c.agregar3(b5.celular,b5.celular+b5.nombre+b5.edad);

         document.writeln("<h3>LISTADO CON ARRAY.PUSH"+grupo2c.listar()+"<br><br>LISTADO CON SET.ADD</h3>"+grupo2c.listar2()+grupo2c.listar3());