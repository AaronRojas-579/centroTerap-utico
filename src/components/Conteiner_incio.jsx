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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.83154139725!2d-58.639918699999996!3d-34.4564239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca486ac74c255%3A0x388b23297480c217!2sAv.%20Constituyentes%20444%2C%20B1617AAR%20Tigre%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1spt-BR!2sar!4v1721922698765!5m2!1spt-BR!2sar"></iframe>
          </div>
          <div className="containerUbicacion_direccion">
            <h3>Av. Constituyentes 444, General Pachecho</h3>
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
              backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/taniker-rojas.appspot.com/o/WhatsApp%20Image%202024-08-02%20at%2012.49.44.jpeg?alt=media&token=ce057e77-010f-4a8f-99ff-3ffcc1d5bd89)`,
            }}
          ></div>
          <div className="text_img">
          <h2>
           Nuestro compromiso es brindar el apoyo necesario para que cada individuo con trastornos del neurodesarrollo pueda alcanzar sus metas y mejorar su calidad de vida.
          </h2>
          {/* <h4><i>Walt Disney</i></h4> */}
          </div>
          {/* <div className="logoPresentacion"></div> */}
        </div>
        <div className="-title_inicio" id="nosotros">
          <h2>¿Quiénes somos?</h2>
        {/* <div className="logoPresentacion"></div> */}
          <div className="title_inicioContent">
            <h3 className="title_inicioContent_text">
            En Neurocaminos somos un centro especializado en neurodesarrollo, ubicado en Tigre, Pacheco, Buenos Aires- Argentina. Nuestro compromiso es ofrecer un servicio integral y humanizado para acompañar el desarrollo de cada individuo. Contamos con un equipo de profesionales altamente capacitados y en constante actualización, dedicados a proporcionar un entorno de apoyo y crecimiento.
            </h3>
            <h3 className="title_inicioContent_text">
              
Nuestra misión es proporcionar una atención personalizada y de calidad, enfocada en las necesidades específicas de cada persona, promoviendo su bienestar y potenciando sus capacidades. Nos enorgullece ser un centro comprometido con la comunidad, donde cada individuo es valorado y respetado.
            </h3>
            <h3 className="title_inicioContent_text">
              
<strong>Nuestros valores:</strong>
<br />
-<strong>Compromiso</strong> Nos dedicamos a ofrecer el mejor servicio, con dedicación y responsabilidad.
<br />
-<strong>Formación</strong> Nuestro equipo está en constante aprendizaje y actualización para brindar el mejor apoyo.
<br />
-<strong>Humanidad</strong> Creemos en un trato cercano, respetuoso y personalizado, poniendo siempre a la persona en el centro de nuestro trabajo.
<br /><br />
<i>Te invitamos a conocer más sobre nuestros servicios y cómo podemos ayudarte en este camino</i>
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
              Proporcionar una atención integral y personalizada a pacientes con trastornos del neurodesarrollo. Nos dedicamos a fomentar el bienestar y el crecimiento personal de cada individuo mediante terapias innovadoras y un enfoque humano. Buscamos ser un apoyo constante tanto para nuestros pacientes como para sus familias, mejorando su calidad de vida y potenciando sus capacidades.
              </p>
            </div>
            <div className="misionesCentro">
              <h3>VISIÓN</h3>
              <p>
              Nuestra visión es convertirnos en el centro de referencia en Argentina para la rehabilitación de pacientes con trastornos del neurodesarrollo. Aspiramos a liderar el campo mediante la innovación, la excelencia en el servicio y el compromiso con la comunidad. Queremos ser reconocidos por nuestro enfoque humanizado y nuestros altos estándares de calidad, contribuyendo al desarrollo y la inclusión de nuestros pacientes en la sociedad.
              </p>
            </div>
            <div className="misionesCentro">
              <h3>VALORES</h3>
              <p>

<strong>Compromiso</strong>: Nos dedicamos a ofrecer una atención de calidad, con responsabilidad y dedicación constante.
<br />
<strong>Innovación</strong>: Aplicamos terapias y técnicas vanguardistas para garantizar el mejor tratamiento posible.
<br />
<strong>Humanidad</strong>: Creemos en un trato cercano, respetuoso y personalizado, priorizando siempre el bienestar de la persona.
<br />
<strong>Formación Continua</strong>: Nuestro equipo está en constante aprendizaje y actualización para brindar el mejor apoyo.
<br />
<strong>Inclusión</strong>: Promovemos la integración y participación activa de nuestros pacientes en la comunidad.
<br />
<strong>Colaboración</strong>: Trabajamos en equipo con las familias y otros profesionales para asegurar un enfoque integral en el tratamiento.
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
                <strong>EVALUACIONES</strong>
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
                <strong>REHABILITACION</strong>{" "}
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
                <strong>AREA SOCIAL</strong>
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
