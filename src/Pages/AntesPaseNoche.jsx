import {Container,CoverParticles,
        PageTransition,TransitionComponent,Con1AntesPaseNoche} from "../index" 
const AntesPaseNoche = () => {
  return (
    <Container>
    <PageTransition/>
    <CoverParticles/>
    <TransitionComponent position='bottom' className='w-full'>
    <Con1AntesPaseNoche/>
    </TransitionComponent>
    </Container>
  )
}

export default AntesPaseNoche;