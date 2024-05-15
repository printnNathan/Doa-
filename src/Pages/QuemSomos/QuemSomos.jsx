import React, { useState } from 'react';
import styles from  './QuemSomos.module.css';
import NavBar from '../../components/NavBar/Header';
import Footer2 from '../../components/Footer/Footer2';
import Esferas from '../../components/Esferas/Esferas';

const QuemSomos = () => {

    const [texto, setTexto] = useState('');

    const handleChange = (event) => {
        setTexto(event.target.value);
    };

    return (
        <div>
            
            <NavBar/>

            <div><h1 className={styles.Texto1}>Quem Somos</h1></div>
            
            <center><div><h1 className={styles.Texto2}> Abrale - Associação Brasileira de Linfoma e Leucemia</h1></div></center>

            

            <input class=".Digite"
             type="text"
             value={texto}
             onChange={handleChange}
             placeholder="Digite a Biografia..." 
            />




            <button className={styles.botao} ><h5>Atualizar</h5></button>
            
            <Footer2/>
            <Esferas/>

        </div>
    )

}

export default QuemSomos; 