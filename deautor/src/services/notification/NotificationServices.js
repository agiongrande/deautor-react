import { createContext, useState } from "react"

const Notification = ( {mensaje = 'Prueba', severity}) => {
    const notificationStyles = {
        position: 'absolute',
        top: 5,
        right: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
        width: 'auto',
        backgroundColor:  severity === 'success' ? 'green':'red',
        padding: '10px',
        color: 'white'
    }

    if (mensaje === ''){
        return null
    }

    return (
        <div style={notificationStyles}>
            {mensaje}
        </div>
    )
}

const NotificationContext = createContext();

export const NotificationServicesProvider = ({children}) => {
    const [mensaje, setMensaje] = useState('');
    const [severity, setSeverity] = useState('');

    const setNotification = (severity, mensaje) => {
        setSeverity(severity)
        setMensaje(mensaje)
        setTimeout(() => {
            setMensaje('')
        }, 3000);
    }

    return(
        <NotificationContext.Provider value={setNotification}>
            <Notification mensaje={mensaje} severity={severity}/>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext