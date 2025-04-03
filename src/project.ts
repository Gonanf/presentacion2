import { makeProject } from "@motion-canvas/core";

import integracion from "./scenes/integracion?scene";
import aplicacionesDeComercio from "./scenes/aplicaciones_de_comercio?scene";
import sistemasEmpresariales from "./scenes/sistemas_empresariales?scene";
import sistemasInalambricos from "./scenes/sistemas_inalambricos?scene";
import sistemasInalambricosP2 from "./scenes/sistemas_inalambricos_p2?scene";
import agentesInteligentes from "./scenes/agentes_inteligentes?scene";
import codigoAbierto from "./scenes/codigo_abierto?scene";
import codigoAbiertoP2 from "./scenes/codigo_abierto_p2?scene";
import codigoAbiertoP3 from "./scenes/codigo_abierto_p3?scene";
import analisisYdiseño from "./scenes/analisis_y_diseño?scene";
import analisisYdiseñoP2 from "./scenes/analisis_y_diseño_p2?scene";
import analisisYdiseñoP3 from "./scenes/analisis_y_diseño_p3?scene";

export default makeProject({
  scenes: [
    integracion,
    aplicacionesDeComercio,
    sistemasEmpresariales,
    sistemasInalambricos,
    sistemasInalambricosP2,
    agentesInteligentes,
    codigoAbierto,
    codigoAbiertoP2,
    codigoAbiertoP3,
    analisisYdiseño,
    analisisYdiseñoP2,
    analisisYdiseñoP3,
  ],
});
