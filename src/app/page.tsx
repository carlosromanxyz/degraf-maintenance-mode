import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className={'container px-4 lg:mx-auto'}>
        <figure className={'flex justify-center mb-15'}>
          <Image
            src={'/assets/images/logo.png'}
            alt="Logo de Degraf"
            width={200}
            height={200}
          />
        </figure>
        <h2 className={'text-xl lg:text-2xl text-gray-700 text-center font-bold mb-4'}>Sitio en Mantención</h2>
        <p className={'text-md lg:text-lg text-gray-700 text-center mb-8'}>Sentimos las molestias, en este momento nos encontramos realizando mantención a nuestro sitio web.</p>

        <h5 className={'text-gray-500 mb-4 text-lg font-bold text-center'}>Puedes llamarnos a:</h5>
        <ul className={'flex justify-center mb-8'}>
          <li className={'mx-6'}>
            <a href="tel:+56226238955" className={'text-gray-500 flex justify-start content-center'}>
              <FontAwesomeIcon icon={faPhone} width={'20px'} className={'text-green-900 mr-2'} />
              <span>+56226238955</span>
            </a>
          </li>
          <li className={'mx-6'}>
            <a href="tel:+56229582656" className={'text-gray-500 flex justify-start content-center'}>
              <FontAwesomeIcon icon={faPhone} width={'20px'} className={'text-green-900 mr-2'} />
              <span>+56229582656</span>
            </a>
          </li>
        </ul>

        <h5 className={'text-gray-500 mb-4 text-lg font-bold text-center'}>Puedes escribirnos a:</h5>
        <ul className={'flex justify-center mb-8'}>
          <li className={'mx-6'}>
            <a href="mailto:electronicos@degraf.cl" className={'text-gray-500 flex justify-start content-center'}>
              <FontAwesomeIcon icon={faEnvelope} width={'20px'} className={'text-green-900 mr-2'} />
              <span>electronicos@degraf.cl</span>
            </a>
          </li>
        </ul>

        <h5 className={'text-gray-500 mb-4 text-lg font-bold text-center'}>Visítanos en::</h5>
        <ul className={'flex justify-center'}>
          <li className={'mx-6'}>
            <a href="https://www.google.com/maps?q=Las+Araucarias+9001,+Quilicura" className={'text-gray-500 text-center flex items-center lg:items-stretch lg:justify-center flex-col lg:flex-row lg:content-center'}>
              <FontAwesomeIcon icon={faLocationDot} width={'20px'} className={'text-green-900 mb-2 lg:mr-2'} />
              <span>Las Araucarias Nº 9001, Quilicura Santiago – Chile</span>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
