import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import styles from './ModalPedidoDoacao.module.css';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

export default function ModalPedidoDoacao({ modalAberto, setModalAberto, doacao }) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    Modal.setAppElement('#root');

    return (
        <Modal
            isOpen={modalAberto}
            style={customStyles}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
        >
            <div className={styles.close} onClick={() => setModalAberto(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 450"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
            </div>
            <div className={styles.container}>

                <div className={styles.images}>
                    <CCarousel controls>
                        {doacao?.imagensPedido?.map(imagem => (
                            <CCarouselItem>
                                <CImage src={imagem.link} alt="slide 1" />
                            </CCarouselItem>
                        ))}
                    </CCarousel>

                </div>
                <div className={styles.title}>
                    <span>{doacao?.titulo}</span>
                </div>

                <div className={styles.description}>
                    {doacao?.descricao}
                </div>

                <div class={styles.separador}></div>

                <div className={styles.ong}>
                    <img src={doacao?.ong?.fotoPerfil}></img>
                    <div className={styles.ongTexts}>
                        <span className={styles.ongName}>{doacao?.ong?.nome}</span>
                        <span>{doacao?.ong?.cidade} - {doacao?.ong?.estado}</span>
                    </div>
                </div>


            </div>
        </Modal>
    )
}    