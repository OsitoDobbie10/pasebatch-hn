import {Container,CoverParticles,PageTransition,
        TransitionComponent,UseGlobal,FormularioEntrada,Tabla} from "../index" 
const PostPaseNoche = () => {
  const {ObjetoPostFacturacionform,GetObjetoPostFacturacionform} = UseGlobal();
  const {FechaPostFacturacion} = ObjetoPostFacturacionform;
  return (
    <Container>
    <PageTransition/>
    <CoverParticles/>
    <TransitionComponent position='bottom' className="w-full h-full flex flex-col gap-3">
    <FormularioEntrada title='POST FACTURACION' 
                       p1='Pantalla Muestra lo Facturado despues de Pase Batch'
                       p2='Introduzca la fecha del PASE BATCH (YYMMDD)'
                       value='FechaPostFacturacion'
                       funcion1={GetObjetoPostFacturacionform}
                       />
    <div className="w-full">
    <Tabla/>
    </div>
    </TransitionComponent>
    </Container>
  )
}

export default PostPaseNoche;