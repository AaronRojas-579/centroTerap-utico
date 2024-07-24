import React, { useEffect, useRef, useState } from "react";
import { CarruselMain } from "./Carrusel.jsx";
import { dataCarrousel } from "../assets/data.js";

export const Conteiner_incio = () => {
  return (
    <>
      {/* <CarruselMain className="carrusel"></CarruselMain> */}
      <div className="container_incio">
        <div className="containerUbicacion" id="ubicacion">
          <div className="containerUbicacion_ubi">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.752033578389!2d-58.63641659999999!3d-34.4584419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca48508f072ef%3A0x65a7f32b9df1b9f3!2sSta.%20Fe%20920%2C%20B1617FPT%20Gral.%20Pacheco%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1spt-BR!2sar!4v1709333284558!5m2!1spt-BR!2sar"
            ></iframe>
          </div>
          <div className="containerUbicacion_direccion">
            <h3>Santa Fe 920, General Pachecho</h3>
            <p>
              Horarios de atención
              <br />
              De luneas viernes de 9hs a 19hs 
            </p>
          </div>
        </div>
        <div className="teleasistencia">
          <div
            className="teleasistencia_fondo"
            style={{
              backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/backend-5dd0b.appspot.com/o/teleasistencia.jpeg?alt=media&token=fa7f1a76-6339-4079-88f5-6bf4b5bc769c)`,
            }}
          ></div>
          <div
            className="teleasistencia_img"
            style={{
              backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/backend-5dd0b.appspot.com/o/drappImg.webp?alt=media&token=23aa503f-8157-451f-bb22-0ff732d136cc)`,
            }}
          ></div>
          <div className="teleasistencia_text">
            <h3>
              TELEASISTENCIA
              <br />
              ASISTIDA
            </h3>
            <br />
            <p>
              Con el objetivo de garantizar la calidad de atención a distancia,
              a través de teleasistencia incorporamos a NEUROCAMINOS {" "}
              <strong>DrApp</strong>
            </p>
          </div>
        </div>
        <div className="imgInicio">
          <div
            className="image_inicio"
            style={{
              backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/taniker-rojas.appspot.com/o/IMG-20240724-WA0039.jpg?alt=media&token=a3234eb5-391f-4126-a390-1a58940a2edf)`,
            }}
          ></div>
          <div className="text_img">
          <h2>
            "Los grandes logros de cualquier persona generalmente dependen de muchas manos, corazones y mentes"
          </h2>
          <h4><i>Walt Disney</i></h4>
          </div>
          {/* <div className="logoPresentacion"></div> */}
        </div>
        <div className="-title_inicio" id="nosotros">
          <h2>¿Quiénes somos?</h2>
        {/* <div className="logoPresentacion"></div> */}
          <div className="title_inicioContent">
            <h3 className="title_inicioContent_text">
              Nuestros valores fundacionales se basan en la convicción de que
              todos niños tienen derecho a acceder a los servicios que los
              conduzcan a alcanzar su pleno potencial cognitivo-emocional.
              Ponemos énfasis en las características individuales de cada niño,
              en sus aspectos culturales y sociales y en la etapa del desarrollo
              emocional y psicomotor en la que se encuentre. Los procesos del
              neurodesarrollo son uno de los pilares fundamentales del
              desarrollo infantil. Por esta razón, es imprescindible trabajar
              desde un enfoque interdisciplinario, mediante el diseño de
              programas terapéuticos individualizados, específicos, holísticos
              en sus consideraciones e intensivos. Como equipo
              terapeuta-medico-familia realizamos la elección de las mejores
              oportunidades de intervención solo puede ser apropiada si se
              sostiene una visión longitudinal de la vida del niño y su entorno.
            </h3>
            <h3 className="title_inicioContent_text">
              En la actualidad, el NEUROCAMINOS ofrece un equipo capacitado
              CONTINUAMENTE directamente por profesionales externos
              especializados en la población. Todos los programas son
              coordinados por profesionales especialistas en la población de TND
              Nuestro objetivo principal en el ingreso de una familia , al ser
              expuesto a la diversidad de experiencias necesarias en distintos
              ambientes según su edad, crezca desarrollando sus capacidades
              funcionales. Es decir que nuestro desafío es acompañarlo junto a
              su familia, para construir el camino de estrategias que le
              permitirán desarrollar la máxima autonomía e independencia posible
              en favor de su inclusión social. Por tal razón, consideramos
              imprescindible contar con programas terapéuticos donde padres o
              cuidadores tengan participación directa en las sesiones de
              intervención,
            </h3>
            <h3 className="title_inicioContent_text">
              como también los terapeutas tratantes, médicos de cabecera y
              docentes de la escuela a la que pertenecen. Todos los
              profesionales que constituyen el entorno educativo y social del
              niño y su familia se encuentran incluidos en el proceso de
              diagnóstico y/o tratamiento.
              <br />
              <i>
                Actualmente somos 17 profesionales en los diferentes servicios
                mas personal administrativo ,maestranza y redes que hacen
                posible este gran sueño de crear un centro diferente , generado
                con responsabilidad afectiva, empatía y conciencia real. Nos
                encontramos ubicados en el centro de Gral. Pacheco Santa fe 920
                localidad de tigre.
              </i>
            </h3>
            <br />
          </div>
        </div>
        <div className="aside_inicio">
          <div className="aside_inicioContent">
            <h3>
              Neuro caminos, es un Centro especializado en trastornos del
              neurodesarrollo, relizamos detección y atención temprana.
            </h3>
            <p>
              Conformado por profesionales con disposición y formación continua
              que trabaja de forma transdiciplinaria bajo una ética de trabajo
              común que ordena y acompaña las intervenciones desde las distintas
              disciplinas para ofrecer una guía integral a las necesidades de
              nuestros pacientes. Comprometidos con la calidad y empatia,
              brindamos servicios de Rehabilitación Integral,Evaluaciones y
              Consultas ambulatorias, teniendo en cuenta las fortalezas y
              desafíos que presenta cada persona.
            </p>
            {/* <div className="contentAside">
          </div> */}
          </div>
        </div>
        <div className="main_inicio">
          <div className="main_inicioContent">
            <div className="misionesCentro">
              <h3>MISIÓN</h3>
              <p>
                Brindar atención e intervención de excelencia, con calidez, a
                través de un equipo de salud comprometido con la capacitación y
                la innovación , cumpliendo con los más altos estándares de
                calidad y logrando la máxima satisfacción en las familias.
              </p>
            </div>
            <div className="misionesCentro">
              <h3>VISIÓN</h3>
              <p>
                Ser una empresa reconocida por sus pacientes, profesionales y en
                el entorno social como una organización excelente, responsable,
                eficiente y competitiva, comprometida con los tratamientos y la
                salud de los niños.
              </p>
            </div>
            <div className="misionesCentro">
              <h3>VALORES</h3>
              <p>
                • Responsabilidad y profesionalidad.
                <br />
                • Honestidad y ética profesional.
                <br />
                • Orientación al cliente.
                <br />
                • Trabajo en equipo.
                <br />
                • Calidad.
                <br />
                • Eficacia.
                <br />
                • Eficiencia.
                <br />• Innovación.
              </p>
            </div>
          </div>
        </div>
        <div className="multimedia_incio1">
          {/* <div className="imgTerapia"></div> */}
        </div>
        <div className="profecionales_inicio" id="tratamientos">
          <h2 >Nuestros Servicios </h2>
          <div className="conteinerProfesionales">
            <div className="profesional1">
              <div className="profesional1img"></div>
              <h3>
                {" "}
                <i>EVALUACIONES</i>
              </h3>
              <h4>
                Consideramos al proceso de detección mediante una evaluación
                integral como un punto de partida necesario para elaborar un
                plan de tratamiento
                <br />
                <br />
                • Adir.
                <br />
                • Ados 2.
                <br />
                • Evaluación del desarrollo infantil 0 a 5 años.
                <br />
                • Evaluación Neurocognitiva .
                <br />
                • Evaluación neurolingüística.
                <br />
                • Perfil sensorial.
                <br />
                • Psicodiagnóstico + CI
                <br />
                <br />
                Finalizado el periodo de evaluacion acordado se convoca a la
                madre padre o cuidador una entrevista de devolución para hacer
                entrega de informe correspondiente Con accesoramiento ingral.
              </h4>
            </div>
            <div className="profesional2">
              <div className="profesional2img"></div>
              <h3>
                {" "}
                <i>REHABILITACION</i>{" "}
              </h3>
              <h4>
                El programa de Rehabilitación Integral está dirigido a niños y
                jóvenes que requieren un abordaje Integral de Rehabilitación
                bajo la Modalidad ambulatoria. Se llevan a cabo través de un
                plan de Tratamiento que combinan diversos servicios , pensados
                desde una perspectiva de Planificación Centrada en el paciente ,
                donde la familia tiene un rol activo en la planificación de su
                tratamiento. Contamos con programas específicos de
                Rehabilitación Cognitiva, del Lenguaje y Psicosocial orientadas
                a que el paciente logre el mayor nivel posible de funcionalidad,
                mejorando su calidad de vida.
                <br />
                <br />
                <h3>EQUIPO TERAPEUTICO</h3>
                <br />
                • PSICOLOGIA TCC
                <br />
                • PSICOPEDAGOGIA TCC
                <br />
                • TERAPIA OCUPACIONAL CON INTEGRACION SENSORIAL
                <br />
                • FONOAUDIOLOGIA NEUROLINGUISTICA
                <br />
                • MUSICOTERAPIA
                <br />
                <br />
                <h3>EQUIPO MEDICO</h3>
                <br />
                • PSQUITRIA INFANTOJUVENIL
                <br />
                • NEUROLOGIA INFANTIL
                <br />
                • PEDIATRA DEL DESARROLLO
                <br />
              </h4>
            </div>
            <div className="profesional3">
              <div className="profesional3img"></div>
              <h3>
                <i>AREA SOCIAL</i>
              </h3>
              <h4>
                Neurocaminos cuenta con un servicio de Orientación
                acompañamiento y Asesoramiento gratuito coordinado por el
                Servicio Social, respecto a las siguientes temáticas:
                <br />
                <br />
                Certificado Único de Discapacidad
                <br />
                Cobertura de Prestaciones por discapacidad.
                <br />
                Gestión de Pensiones no contributivas.
                <br />
                Asesoramiento de Coberturas de Salud.
                <br />
                Articulación con organismos estatales.
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* <section id="tratamientos"></section> */}
      {/* <CarruselMain></CarruselMain> */}
    </>
  );
};
