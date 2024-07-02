import './header.css';
import Bm from "../../multimedia/Bemust.png";
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



export default function Header(){
    return(
        <section class="sectionMain">
            <div class="divlogotitle">
                <img src={Bm} alt="logo" class="imglogo" />
                <h1 class="h1title">Be Must</h1>
            </div>
            
            <div>
            <div class="navbar">
                <ul class="navbar">
                    <li><Autocomplete
                            disablePortal
                            id="Producto"
                            options={Productos}
                            sx={{ width: 300, border: 0 }}
                            renderInput={(params) => <TextField {...params} label="Search" />}
                    /></li>
                    <li class="item"><Link to="/" class="link">Inicio</Link> </li>
                    <li class="item"><Link to="/carrito" class="link">Carrito</Link></li>
                    <li class="item"><Link to="/personalizacion" class="link">Personalización</Link></li>
                    <li class="item"><Link to="/login" class="link">Iniciar Sesión</Link></li>
                    <li class="item"><Link to="/registro" class="link">Registrarse</Link></li>
                </ul>
            </div>
            </div>
        </section>
    )
}

const Productos = [
    { label: 'Producto 1' },
    { label: 'Producto 2' },
    { label: 'Producto 3' },
    { label: 'Producto 4' },
];
