import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import {Accordion} from 'react-bootstrap'
import alerta from 'sweetalert'

const EditarBodeguero = () => {

    const VolverCargas = useNavigate();
    const IDBODEGUERO = useParams()

    const [nombre,setNombre] = useState("")
    const [contrasena,setContrasena] = useState("")
    const [email,setEmail] = useState("")
    const [comuna,setComuna] = useState("")
    const [telefono,setTelefono] = useState(0)
    const [rut,setRut] = useState("")
    const [apellidopaterno,setApellidopaterno] = useState("")
    const [apellidomaterno,setApellidomaterno] = useState("")
 
    const [bodegueroUpdate,setBodegueroUpdate] = useState()

const BodegueroActualizar = async () => {
        const id = IDBODEGUERO.id
        const carga = await axios.get('http://localhost:4000/EditarBodeguero/'+id)
        setBodegueroUpdate(carga.data)
}



 const ActualizarBodeguero = async () => {
        console.log("tomando los datos del bodeguero",nombre,contrasena,email,comuna,telefono,rut,apellidopaterno,apellidomaterno)
/*         alerta("los datos a eliminar"+nombre+contrasena+email+comuna+telefono+rut+apellidopaterno+apellidomaterno) */
         const id = IDBODEGUERO.id 
const res =  await axios.post('http://localhost:4000/EditarBodeguero/'+id,{nombre,contrasena,email,comuna,telefono,rut,apellidopaterno,apellidomaterno})

          if(res==='ok'){
            VolverCargas("/Bodegueros")
            alerta("!Bodeguero actualizado")
          }else{
            VolverCargas("/Bodegueros")
            alerta("!Bodeguero actualizado")
          }
    
        
      /*   VolverCargas("/Bodegueros") */
        
    
 }

useEffect(() => {
   console.log("VIENDO EL ID DEL BODEGUERO",IDBODEGUERO)
   if(!bodegueroUpdate){
    BodegueroActualizar()
   }
})


  return (
<div>
  
  <html lang="en">
    <head>
      <meta charset="utf-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <meta name="description" content=""></meta>
      <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors"></meta>
      <meta name="generator" content="Hugo 0.88.1"></meta>
      <title>Formulario INGRESO DE BODEGUERO</title>
  
      <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/checkout/"></link>
  
      
  
  
  <link href="/docs/5.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
  
  
  <link rel="apple-touch-icon" href="/docs/5.1/assets/img/favicons/apple-touch-icon.png" sizes="180x180"></link>
  <link rel="icon" href="/docs/5.1/assets/img/favicons/favicon-32x32.png" sizes="32x32" type="image/png"></link>
  <link rel="icon" href="/docs/5.1/assets/img/favicons/favicon-16x16.png" sizes="16x16" type="image/png"></link>
  <link rel="manifest" href="/docs/5.1/assets/img/favicons/manifest.json"></link>
  <link rel="mask-icon" href="/docs/5.1/assets/img/favicons/safari-pinned-tab.svg" color="#7952b3"></link>
  <link rel="icon" href="/docs/5.1/assets/img/favicons/favicon.ico"></link>
  <meta name="theme-color" content="#7952b3"></meta>
  
  
  
  
      
  
      <link href="form-validation.css" rel="stylesheet"></link>
    </head>
    <body className="bg-light">
    
  <div className="container">
  
    <main>
      
      <div className="py-5 text-center">

      <div className='col-md-6'>
      {bodegueroUpdate? (

<table class="table table-dark table-striped mt-5 col-md-6">
{bodegueroUpdate.map(usuario => (
      <table class="table col-md-6">
      <thead className='thead-dark col-md-6'>
        <tr>
          <th scope="col">#id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Contrasena</th>
          <th scope="col">Email</th>
          <th scope="col">Comuna</th>
          <th scope="col">Telefono</th>
          <th scope="col">Rut</th>
          <th scope="col">Apellido Paterno</th>
          <th scope="col">Apellido Materno</th>
          <th scope="col">Fecha_Creacion</th>
        </tr>
      </thead>
      <tbody>
      <tr>
<th scope="row"><p>{`${usuario.id_bodeguero}`}</p></th>
<th scope="row"><p>{`${usuario.nombre}`}</p></th>
<th scope="row"><p>
<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Contrasena</Accordion.Header>
    <Accordion.Body>
    <p>{`${usuario.contrasena}`}</p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion></p></th>
<th scope="row"><p>{`${usuario.email}`}</p></th>
<th scope="row"><p>{`${usuario.comuna}`}</p></th>
<th scope="row"><p>{`${usuario.telefono}`}</p></th>
<th scope="row"><p>{`${usuario.rut}`}</p></th>
<th scope="row"><p>{`${usuario.apellidopaterno}`}</p></th>
<th scope="row"><p>{`${usuario.apellidomaterno}`}</p></th>
<th scope="row"><p>{`${usuario.fecha_creacion}`}</p></th>
</tr>
      </tbody>
    </table>
))}
</table>):(<div className='alert alert-danger'>!No se ha podido cargar el bodeguero</div>)}
      </div>

        <h2>Editar Bodeguero</h2>
        {/* <p className="lead">formulario para la creacion de los bodeguero.</p>  */}
      </div>
      <Link to={`/Bodegueros`}><h4>Listado Bodegueros</h4></Link>
      <div className="row g-5">
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Formulario para editar bodeguero</h4>
  
             <div className="row g-3">
              <div className="col-sm-6">
                <label for="nombre" className="form-label">Nombre Bodeguero</label>
                <input type={'text'} className="form-control" placeholder="nombre" onChange={(evento) => {setNombre(evento.target.value)}} id="contrasena" name="nombre"  required></input>
                <div className="invalid-feedback">
                  Nombre creador requerido!
                </div>
              </div>
  
              <div className="col-sm-6">
                <label for="lastName" className="form-label">Contraseña</label>
                <input type={'text'} className="form-control" placeholder="nombre" onChange={(evento) => {setContrasena(evento.target.value)}} id="contrasena" name="nombre"  required></input>
                <div className="invalid-feedback">
                  contraseña requerida!
                </div>
              </div>
  
              <div className="col-sm-6">
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" onChange={(evento) => {setEmail(evento.target.value)}} name="email"  placeholder="email" required></input>
                <div className="invalid-feedback">
                  email requerido!
                </div>
              </div>
  
              <div className="col-12">
                <label for="username" className="form-label">Comuna</label>
                <div className="input-group has-validation">
                  <span className="input-group-text"><i className="fa-solid fa-compass">
                                         <div className="form-group" aria-placeholder="comuna">
                                              <select name="comuna" id="comuna" onChange={(evento) => {setComuna(evento.target.value)}} required>
                             {/*       {{!--            <option value="0" selected="selected">Regiones</option> --}} */}
                                              <option value="Tarapaca">1 Tarapaca</option>
                                              <option value="Antofagasta">2 Antofagasta</option>
                                              <option value="Atacama">3 Atacama</option>
                                              <option value="Coquimbo">4 Coquimbo</option>
                                              <option value="Valparaiso">5 Valparaiso</option>
                                              <option value="O'Higgins">6 O'Higgins</option>
                                              <option value="Maule">7 Maule</option>
                                              <option value="Bio - Bio">8 Bio - Bio</option>
                                              <option value="Araucania">9 Araucania</option>
                                              <option value="Los Lagos">10 Los Lagos</option>
                                              <option value="Aisen">11 Aisen</option>
                                              <option value="Magallanes Y Antartica">12 Magallanes Y Antartica</option>
                                              <option value="Metropolitana">13 Metropolitana</option>
                                              <option value="Los Rios">14 Los Rios</option>
                                              <option value="Arica y Parinacota">15 Arica y Parinacota</option>
                                              </select>
                                          </div>
                  </i></span>
                <div className="invalid-feedback">
                      Por favor se requiere la comuna del bodeguero
                  </div>
                </div>
              </div>
  
              <div className="col-12">
                <label for="telefono" className="form-label">Telefono<span className="text-muted">(Obligatorio)</span></label>
                <input type="tel" className="form-control" onChange={(evento) => {setTelefono(evento.target.value)}} name="telefono" maxlength="9" placeholder="telefono/celular" required></input>
                <div className="invalid-feedback">
                Por favor ingrese el telefono del bodeguero
                </div>
              </div>
  
  
              <div className="col-12">
                <label for="rut" className="form-label">Rut<span className="text-muted"> (Rut)</span></label>
                <input type='text' className='form-control' placeholder='Rut' name='rut' maxLength={10} onChange={(evento) => {setRut(evento.target.value)}}></input>
              </div>
  
              <div className="col-sm-6">
                <label for="apellidopaterno" className="form-label">Apellido Paterno</label>
                <input type="text" className='form-control' placeholder='Apellido Paterno' name='apellidopaterno' onChange={(evento) => {setApellidopaterno(evento.target.value)}}></input>
                <div className="invalid-feedback">
                  ingrese apellido paterno!
                </div>
              </div>
  
              <div className="col-sm-6">
                <label for="apellidomaterno" className="form-label">Apellido Materno</label>
                <input type="text" className='form-control' placeholder='Apellido Materno' name='apellidomaterno' onChange={(evento) => {setApellidomaterno(evento.target.value)}}></input>
                <div className="invalid-feedback">
                  ingrese apellido materno!
                </div>
              </div>
  
            </div>
              <hr></hr>
              <button className="btn btn-success btn-block" onClick={()=>ActualizarBodeguero()} >Editar Bodeguero</button>
      
        </div>
      </div>
    </main>
  
  
  </div>
  
  
      <script src="/docs/5.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  
        <script src="form-validation.js"></script>
    </body>
  </html>
      </div>
  )
}

export default EditarBodeguero
