"use client"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

export default function FormContato() {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [colorMessage, setColorMessage] = useState('bg-red-700');

    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };
    function onSubmitSend(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (name == null || name.length < 3) { setMessage('O nome digitado não é válido'); }
        else if (email == null || email.length < 5) { setMessage('O e-mail digitado não é válido'); }
        else if (phone == null || phone.length < 7) { setMessage('O telefone digitado não é válido'); }
        else if (!email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) { setMessage('O e-mail digitado não é válido'); }
        else {
            setMessage('');
            axios.post('https://api.yxe.com.br/contatos/create', {
                name: name,
                email: email,
                phone: phone,
            })
            .then(function (response) {
                setMessage(response.data.message);
                if (response.data.status == true) { setColorMessage('bg-green-700'); } else { setColorMessage('bg-red-700'); }
            })
            .catch(function (error) { setMessage("HOUVE UM ERRO AO ENVIAR A MENSAGEM"); });
        }
    }
    return (
        <form onSubmit={onSubmitSend}>
            <div className="grid grid-cols-1 gap-6">
                <input type="text" name="name" onChange={handleName} value={name} className="bg-white w-full py-3 px-6 rounded-lg text-lg font-light bg-transparent text-gray-900 shadow-sm" placeholder="Nome" />
                <input type="text" name="email" onChange={handleEmail} value={email} className="bg-white w-full py-3 px-6 rounded-lg text-lg font-light bg-transparent text-gray-900 shadow-sm" placeholder="E-mail" />
                <input type="text" name="phone" onChange={handlePhone} value={phone} className="bg-white w-full py-3 px-6 rounded-lg text-lg font-light bg-transparent text-gray-900 shadow-sm" placeholder="Telefone" />
                <div className="block sm:flex text-sm md:text-sm lg:text-xl">
                    <div className="mr-2 md:mr-4 py-1 sm:py-0">candidato à: </div>
                    <label htmlFor="vereador" className="flex mx-2 py-1 sm:py-0">
                        <div><input type="radio" className="bg-blue-600 border-none" name="tipo" value="vereador" id="vereador" /></div>
                        <div className="text-orange-500 mx-2">Vereador</div>
                    </label>
                    <label htmlFor="prefeito" className="flex mx-2 py-1 sm:py-0">
                        <div><input type="radio" className="bg-blue-600 border-none" name="tipo" value="prefeito" id="prefeito" /></div>
                        <div className="text-orange-500 mx-2">Prefeito</div>
                    </label>
                </div>
                <div>
                    <button type="submit" className="py-2 px-4 md:px-8 rounded-md md:rounded-lg bg-blue-600 hover:bg-blue-700 transition ease-in-out duration-300 delay-300 text-white uppercase flex justify-center items-center gap-x-2"><FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" /> Enviar</button>
                </div>
            </div>
            {
                (message != '') ? <div id="response-contact" className="w-full"><div className={'wpcf7-response-output w-full text-white my-2 p-2 uppercase text-center font-reading font-bold border-2 border-white  border-dashed ' + colorMessage} role="alert">{message}</div></div> : ''
            }
        </form>
    )
}