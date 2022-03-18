import "./ContactForm.css"
import { useState } from "react"


const ContactForm = ({setContact, setDatosGuardados,datosGuardados}) => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [direccion, setDireccion] = useState('')
    const [comentario, setComentario] = useState('')

    const handleContactForm = (e) => {
        e.preventDefault();

        const objContact = {
            nombre,
            telefono,
            direccion,
            comentario
        }
        setContact(objContact)
        setDatosGuardados(true)
        console.log()
        
    }
    if (datosGuardados === true){
        return(
        <div className='ContactForm'>
            <p>Nombre: {nombre}</p>
            <p>Teléfono: {telefono}</p>
            <p>Dirección: {direccion}</p>
            <p>Comentario: {comentario}</p>
            <button className='botonDatos' onClick={() => setDatosGuardados(false)}>Modificar Datos</button>
        </div>
        )
    }

    return (
        <div className='ContactContainer'>
        <form className='ContactForm' onSubmit={handleContactForm}>
          <label className='LabelContact'>Nombre:
            <input className='InputContact' type='text' required value={nombre} onChange={({ target }) => setNombre(target.value)}/>
          </label>
          <label className='LabelContact'>Telefono:
            <input className='InputContact' type='number' required value={telefono} onChange={({ target }) => setTelefono(target.value)}/>
          </label>
          <label className='LabelContact'>Direccion:
            <input className='InputContact' type='text' required value={direccion} onChange={({ target }) => setDireccion(target.value)}/>
          </label>
          <label className='LabelContact'>Comentario: 
            <input className='InputContact' type='text' value={comentario} onChange={({ target }) => setComentario(target.value)}/>
          </label>
          <button  className='botonDatos' type='submit'>Confirmar datos</button>
        </form>
      </div>
    )
}

  export default ContactForm