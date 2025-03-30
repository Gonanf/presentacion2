import {makeProject} from '@motion-canvas/core';

import integracion from './scenes/integracion?scene';
import aplicacionesDeComercio from './scenes/aplicaciones_de_comercio?scene';
import sistemasEmpresariales from './scenes/sistemas_empresariales?scene';


export default makeProject({
  scenes: [integracion,aplicacionesDeComercio,sistemasEmpresariales],
});
