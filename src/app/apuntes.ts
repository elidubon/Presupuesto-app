/* 
solucion para levantar proyecto de presupuesto angular

Angular CLI: 15.2.6
Node: 18.15.0
Package Manager: npm 9.6.5

paso 1 
Siga estos pasos en su terminal en el directorio de aplicaciones actual:
npm install -g npm-check-updates
Instala el paquete npm-check-updates globalmente para hacer exactamente lo que dice su nombre.
ncu
Esto mostrará las dependencias al lado de (una flecha que apunta hacia) sus nuevas versiones (se recomienda actualizar) como se enumeran en su archivo package.json en el directorio actual.
ncu -u
Esto actualiza las nuevas versiones enumeradas en su archivo package.json y prepara su aplicación para el siguiente paso (las actualizaciones propiamente dichas).
npm update
o
npm install


-----

si da un error de tipo zona seguir las siguientes instrucciones 

En el archivo src/polyfill.js, reemplace

import 'zone.js/dist/zone';

a

import 'zone.js';
import 'zone.js/testing';

*/