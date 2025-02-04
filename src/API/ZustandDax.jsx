import {create} from "zustand";
import {UseGlobal} from "../index";
export const ViewGlobal = create((set,get)=>({
  SuministrosEnviadosLeerMasivo: 0,
  SuministrosEnviadosLeerAltosConsumidores: 0,
  Total: 0,
  CompradorArtivo: 'N/A',
  CantidadConceptos: '0',
  CantidadLecturasPagas: '0',
  CantidadPagos: '0',
  FechaLecturasRealCicloMax: '0',
  FechaRealRecepcionMax:'0',
  FechaLecturaReal:'0',
  AnomaliasBlanco:'0',
  TotalSuministrosFacturados: 0,
  ObservacionTotalSuministrosFacturados: '0',
  Anomalias: 0,
  ObservacionAnomalias: '0',
  Emblasados:0,
  ObservacionEmbalasados: '0',
  LecturasProcesadasITCDL:0,
  ObservacionLecturasProcesadasITCDL:0,
  ITERROR:0,
  ObservacionITERROR:0,
  CICLOSITERROR:0,
  ObservacionCICLOSITERROR:0,
  EmbalsadosITIFACT:0,
  ObservacionEmbalsadosITIFACT:0,
  ValidacionFUECICLO:0,
  ObservacionValidacionFUECICLO:0,
  PagosEmbalsados:0,
  ObservacionPagosEmbalsados:0}));