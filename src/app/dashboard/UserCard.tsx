interface Usuario {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  fecha_nacimiento: string;
  direccion: string;
  rol: string;
}

export default function UserCard({ usuario }: { usuario: Usuario }) {
  return (
    <section className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        👤 Información del Usuario
      </h2>
      <div className="grid sm:grid-cols-2 gap-4 text-gray-600">
        <p>
          <span className="font-medium">Nombre:</span> {usuario.nombre}
        </p>
        <p>
          <span className="font-medium">Email:</span> {usuario.email}
        </p>
        <p>
          <span className="font-medium">Teléfono:</span> {usuario.telefono}
        </p>
        <p>
          <span className="font-medium">Nacimiento:</span>{" "}
          {usuario.fecha_nacimiento}
        </p>
        <p>
          <span className="font-medium">Dirección:</span> {usuario.direccion}
        </p>
        <p>
          <span className="font-medium">Rol:</span> {usuario.rol}
        </p>
      </div>
    </section>
  );
}
