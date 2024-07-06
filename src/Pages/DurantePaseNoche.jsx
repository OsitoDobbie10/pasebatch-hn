import Swal from 'sweetalert2';
import {Container,CoverParticles,PageTransition,UseGlobal,TransitionComponent,FormularioDurantePase} from "../index" 
const DurantePaseNoche = () => {
  const {ObjetoProgramasPase} = UseGlobal();
  const {cbc1400,lecb500,FACB001} = ObjetoProgramasPase;
  const funcionCbc1400 = ()=>{
  Swal.fire({
    title: "Query Generado",
    text: `Conteo del cbc1400 es: ${cbc1400}`,
    icon: "success"});
  }
  const funcionlecb500 = ()=>{
    Swal.fire({
      title: "Query Generado",
      text: `Conteo del lecb500 es: ${lecb500}`,
      icon: "success"});
  }
    const funcionFACB001 = ()=>{
      Swal.fire({
        title: "Query Generado",
        text: `Conteo del FACB001 es: ${FACB001}`,
        icon: "success"});
  }
  return (
    <Container>
    <PageTransition/>
    <CoverParticles/>
    <TransitionComponent position='right' className="w-full h-full flex flex-col ">
    <h1 className="text-3xl text-secondary font-bold text-center">Durante Pase Nocturno</h1>
    <FormularioDurantePase 
     BotomTitulo="Actualizar PAGOS" 
     texto="Cuando se este corriendo el programa cbc1400 tiene que ir a disminuir"
     valor={cbc1400}
     funcion={funcionCbc1400}/> 
    <FormularioDurantePase 
     BotomTitulo="Actualizar LECTURAS" 
     texto="Cuando se esta corriendo el programa lecb0500 debe ir aumentando gradual en bloques cada 5 minutos"
     valor={lecb500}
     funcion={funcionlecb500}/>
     <FormularioDurantePase 
     BotomTitulo="Actualizar FACTURANDO" 
     texto="Cuando se esta corriendo el programa FACB0001 debe ir aumentando gradual en bloques cada 5 minutos"
     valor={FACB001}
     funcion={funcionFACB001}/>
    </TransitionComponent>
    </Container>
  )
}

export default DurantePaseNoche;