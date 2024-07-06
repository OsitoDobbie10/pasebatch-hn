import {Container,CoverParticles,PageTransition,SpinnerContainer2} from "../index" 
const TablaGeneracion = () => {
  return (
    <Container>
    <PageTransition/>
    <CoverParticles/>
    <div className="w-full h-[500px] flex flex-col justify-center">
    <span className='text-2xl font-bold text-center text-secondary'>
    Cuando se haga la conexion a la BD se visualizara la vista de datos
    </span>
    <SpinnerContainer2/>
    </div>
    </Container>
  )
}

export default TablaGeneracion