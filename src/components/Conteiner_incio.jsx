import React from "react";

export const Conteiner_incio = () => {
  return (
    <div className="container_incio">
      <div className="-title_inicio">
        <div className="title_inicioContent">
          <h2>Nombre del Centro</h2>
          <h3>ACOMPAÑAMIENTO</h3>
        </div>
      </div>
      <div className="aside_inicio">
        <div className="aside_inicioContent">
          <h3>COBERTURA</h3>
          <p>
            Ofrecemos el servicio de rehabilitación infanto juvenil para todos
            los pacientes con certificado de discapacidad (CUD).

            Consultorios Médicos de Niños y Estudios: consultar por valores
            privados.

            Programas para pacientes sin Certificado de Discapacidad, consulta.
          </p>
          {
            /* <div className="contentAside">
          </div> */
          }
        </div>
      </div>
      <div className="main_inicio">
        <div className="main_inicioContent">
          <h3>CONSULTORIOS MÉDICOS DE NIÑOS</h3>
          <p>
            El Consultorio de Neurología Infantil está integrado por médicos
            especialistas en evaluación, diagnóstico y tratamiento de
            enfermedades neurológicas y psiquiátricas.
          </p>
          <h3>PROGRAMAS DE REHABILITACIÓN PARA NIÑOS Y ADOLESCENTES</h3>
          <p>
            Nuestro servicio de rehabilitación para trastornos del
            neurodesarrollo, discapacidad intelectual, y otras enfermedades
            neurológicas está especialmente orientado a la atención en formatos
            de módulos integral simple e intensivo con cobertura para pacientes
            con y sin certificado de discapacidad (CUD) En nuestros programas,
            los niños reciben todas las terapias en forma integral,
            interdisciplinaria y secuenciales en los mismos días de
            concurrencia, siendo coordinados y dirigidos para acompañarlos
            promoviendo su mejor integración escolar y social.
          </p>
          <h3>PATOLOGÍAS QUE SE ATIENDEN EN NIÑOS Y ADOLESCENTES</h3>
          <p>
            • Trastornos del Espectro Autista (TEA) • Trastorno de Atención con
            Hiperactividad (TDAH) • Desatención • Hiperactividad • Impulsividad
            • Trastornos específicos del aprendizaje • Trastorno de lectura
            (dislexia) • Trastorno de expresión escrita (disgrafia) • Trastorno
            del cálculo (discalculia) • Trastornos de la comunicación •
            Trastorno de la expresión • Trastorno de la comprensión • Trastorno
            fonológico (dislalia) • Tartamudeo (disfemia) • Discapacidad
            Intelectual
          </p>
          <h3>MÓDULOS DIAGNÓSTICOS Y EVALUACIONES</h3>
          <p>
            Contamos con una amplia gama de evaluaciones diagnósticas a fin de
            determinar la presencia de patología y grado de la misma, realizadas
            por profesionales especializados. • Evaluación Neurolingüística /
            Neurocognitiva • Perfil Sensorial • ADOS / ADI-R / VINELAND •
            Psicodiagnóstico •Coeficiente intelectual
          </p>
        </div>
      </div>
      <div className="multimedia_incio1">
        {/* <div className="imgTerapia"></div> */}
      </div>
      <div className="profecionales_inicio">
        <h2>Nuestros Profesionales</h2>
        <div className="conteinerProfesionales">
          <div className="profesional1">
            <div className="profesional1img"></div>
            <h3>Dra. Marcela Parada Marcilla</h3>
            <h4>Directora Médica – Neurología</h4>
          </div>
          <div className="profesional2">
            <div className="profesional2img"></div>
            <h3>Dra. Marcela Parada Marcilla</h3>
            <h4>Directora Médica – Neurología</h4>
          </div>
          <div className="profesional3">
            <div className="profesional3img"></div>
            <h3>Dra. Marcela Parada Marcilla</h3>
            <h4>Directora Médica – Neurología</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
