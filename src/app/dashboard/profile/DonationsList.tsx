interface Donacion {
  id: number;
  monto: number;
  fecha: string;
  metodo_pago: string;
  obra: {
    id: number;
    titulo: string;
    descripcion: string;
    fecha: string;
    imagen_url: string;
    estado: string;
    categoria: { id: number; nombre: string };
  };
}

export default function DonationsList({
  donaciones,
}: {
  donaciones: Donacion[];
}) {
  return (
    <section className="bg-white rounded-2xl shadow p-6 ">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        💰 Mis Donaciones
      </h2>

      <div className="space-y-4">
        {donaciones.map((don) => (
          <div
            key={don.id}
            className="border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row gap-4 hover:shadow-md transition"
          >
            <img
              src={don.obra.imagen_url}
              alt={don.obra.titulo}
              className="w-full sm:w-40 h-32 object-cover rounded-lg"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 text-lg">
                {don.obra.titulo}
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                {don.obra.descripcion}
              </p>
              <div className="text-sm text-gray-500">
                <p>
                  <span className="font-medium">Fecha:</span> {don.fecha}
                </p>
                <p>
                  <span className="font-medium">Monto:</span> ${don.monto}
                </p>
                <p>
                  <span className="font-medium">Método:</span> {don.metodo_pago}
                </p>
                <p>
                  <span className="font-medium">Categoría:</span>{" "}
                  {don.obra.categoria.nombre}
                </p>
              </div>
              <span
                className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${
                  don.obra.estado === "activa"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {don.obra.estado.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
