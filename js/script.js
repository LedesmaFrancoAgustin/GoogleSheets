document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    
    const url = 'https://script.google.com/macros/s/AKfycbwf010MkmMBZxEdc5Txh8_pUU1IaBZ4kabxcQVW8NU7zCzIItdPlt18_gD4SFNMs6pYrQ/exec';
    
    const datos = {
      nombre: nombre,
      email: email,
      telefono: telefono
    };
    
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Datos enviados con éxito');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Hubo un error al enviar los datos');
    });
  });