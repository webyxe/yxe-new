"use client"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import ContentLinks from "../dados/contentLinks";

export default function Call() {
    return (
        <section className=" py-10 md:py-16 bg-call bg-cover bg-center bg-blue-600">
            <div className="container mx-auto px-4">
                <div className="block lg:flex">
                    <div className="lg:w-7/12">
                        <h3 className="text-center lg:text-left text-zinc-100 text-xl md:text-3xl uppercase py-4 font-medium">Converse com quem realmente entende de
marketing político!</h3>
                        <p className="text-center lg:text-left text-white md:text-lg font-light">Nós temos as melhores estratégias de crescimento para a sua campanha eleitoral.</p>
                    </div>
                    <div className="lg:w-5/12 flex flex-col justify-center items-center">
                        <Link href={ContentLinks.whatsapp}><button type="button" className="bg-orange-500 hover:bg-orange-600 transition text-white font-medium rounded-full my-4 py-2 md:py-3 px-8 md:px-10 xl:px-16 block text-lg mx-auto uppercase">Solicite um orçamento</button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}