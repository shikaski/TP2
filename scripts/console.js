let data = {
  reservas: [
    {
      nombre: "Nombre",
      apellido: "Apellido",
      personas: "2",
      horario: "12:30",
    },
  ],
};

const form = document.querySelector("#forma");
const sendBtn = document.querySelector("#sendBtn");

const agregarReserva = () => {
  const nuevaReserva = {
    nombre: form.nombre.value,
    apellido: form.apellido.value,
    personas: form.numero.value,
    horario: form.horario.value,
  };
  data = { ...data, reservas: [...data.reservas, nuevaReserva] };

  form.reset();
  console.log(data.reservas);
};

sendBtn.addEventListener("click", agregarReserva);
