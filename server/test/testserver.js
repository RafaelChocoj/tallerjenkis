/*testar rutas vamos a utulizar supertest que
nos va ayudar a hacer las  peticiones*/
const request = require("supertest");
/*importar eñ archivo index*/
const app = require("../src/index");


/*describe nos permiten agrupar pruebas*/
/*it nos sirve para mostar los mensajes*/
describe('GET /get_users',function(){
    it('obteniendo lista de usuarios',function(done){
      /*haemos la peticion con la amplicacion*/
        request(app)
            .get('/get_users')
            .set("Accept", "application/json")//heads
            .expect("Content-Type", /json/) // esperamos un json
            .expect(200) //esperar que reponda un codigo de estado
            .end((err) => {
                if (err) return done(err);
                done();
              });            
    });
});


describe("POST /login", function()  {
    it("Usuario no encontrado, error no existe", (done) => {
      const userdata = {
        correo: "noexiste@gmail.com",
        contrasenia: "0",
      };

      request(app)
        .post("/login")
        .send(userdata)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(404)
        .expect('"usuario o contraseña incorrecta"') 
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });

});
