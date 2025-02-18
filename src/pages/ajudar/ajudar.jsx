import { useState } from 'react'
import './style.css'

const Ajudar = () => {

    return (
            <div className="ajudarContainer">
                <div className="qrcode">
                    <img src="/clickcat/qrcode.svg" alt="" />
                </div>
                <div className="social">
                    <span>
                        Você quis dizer: <br /> "me contratar"?
                    </span>
                    <div className="socialItem">
                        <a href="https://www.instagram.com/allesonsales/" target='blank'>
                            <i class="bi bi-instagram"></i>            
                        </a>
                        <a href='https://wa.me/5511966186601' target='blank'>
                            <i class="bi bi-whatsapp"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/allesonsales/' target='blank'>
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
    )
}

export default Ajudar