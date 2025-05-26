const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Se corrigio la selección, faltaba el "."
const $b = document.querySelector('.blog'); // Se corregio la selección, se uso "#blog", pero en HTML es "class"
const $l = document.querySelector('.location');

//es una promesa, y como es una funcion async await se debe usar el try y el catch 
const displayUser = async (username) => {
  
  try {
    $n.textContent = 'Cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    //se agrego las sentencia if para corroborar si la petecion del url es corefcta 
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    //Se declaro const data porque no se estaba usando
  //y se asigno el valor de response usando json para poder
  //leerlo como archivo JS
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (err) {
    handleError(err);
  }
};


function handleError(err) {
  console.log(`OH NO! ${err}`);
  //junte los dos console
  //console.log(err);
  //se agrego el signo de $ ya que asi estaba inicializado
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);
