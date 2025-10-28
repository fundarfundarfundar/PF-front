export const mockUserDashboard = {
  usuario: {
    id: 1,
    nombre: "Julio César Aguilar",
    email: "jcesar.a15@gmail.com",
    telefono: "+54 9 3400 665074",
    fecha_nacimiento: "1998-05-15",
    direccion: "Rosario, Santa Fe, Argentina",
    rol: "usuario",
  },
  donaciones: [
    {
      id: 101,
      monto: 2500,
      fecha: "2025-09-10",
      metodo_pago: "MercadoPago",
      obra: {
        id: 20,
        titulo: "Agua para el Norte",
        descripcion:
          "Proyecto para proveer acceso a agua potable en comunidades rurales del norte argentino.",
        fecha: "2025-07-15",
        imagen_url:
          "https://us.123rf.com/450wm/borgogniels/borgogniels1701/borgogniels170100004/69924367-magn%C3%ADfico-muchacha-africana-negro-beber-con-las-manos-ahuecadas-s%C3%ADmbolo-de-la-sequ%C3%ADa-ni%C3%B1a-africana.jpg",
        estado: "activa",
        categoria: { id: 1, nombre: "Infraestructura" },
      },
    },
    {
      id: 102,
      monto: 1200,
      fecha: "2025-09-30",
      metodo_pago: "Stripe",
      obra: {
        id: 25,
        titulo: "Educación para Todos",
        descripcion:
          "Donación para equipar escuelas rurales con materiales educativos.",
        fecha: "2025-06-22",
        imagen_url:
          "https://www.orientacionandujar.es/wp-content/uploads/2014/09/ni%C3%B1os-estudiando.jpg",
        estado: "inactiva",
        categoria: { id: 2, nombre: "Educación" },
      },
    },
  ],
};
