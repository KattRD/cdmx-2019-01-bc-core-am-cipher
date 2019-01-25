# Cifrado

A lo largo de la historia, y en ciertos y múltiples contextos, las personas se han visto en la necesidad de proteger su información. Se idearon muchas maneras de lograrlo y así tener la certeza de que sólo quién o quiénes estén al tanto de la forma del mismo podrían tener la capacidad de acceder a dicha información.

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

## Secret Key 

Secret Key es una aplicación de cifrado y descifrado que funciona bajo un parámetro de un desplazamiento de letras identificado como (_offset_).

La utilidad principal corresponde a la creación de contraseñas para diversas cuentas que pudiera tener un usuario y en donde se solicite una palabra sin números y sin espacios. Secret Kay le ayudará a utilizar una palabra común cifrada bajo un (_offset_)escogido por el usuario y así mismo logra el descifrado conociendo el (_offset_) para obtener así, la palabra inicial.

##Funciones

La interfaz le permite al usuario:
- Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
- Insertar un mensaje (texto) a cifrar.
- Ver el resultado del mensaje cifrado.
- Insertar un mensaje (texto) a descifrar.
- Ver el resultado del mensaje descifrado.

## Características Lógicas

*Acepta una sóla palabra o las que se desee el usuario siempre y cuando no contenga espacios.
*No acepta la letra Ñ.
*No acepta símbolos, signos o caracteres especiales.
*No acepta números.

##Diseño

El diseño ha querido lograr ser simple y atractivo, con colores que se encuentran dentro de editores de código y simular así un espacio de código-encriptación.
Fácil de entender y de usar.
[Leer Más](https://docs.google.com/document/d/1rc1JwXYW6D9JXxnyUeZVblIF8jse4hQP7MH5ZwjHeUE/edit?usp=sharing)

#### Instalación
*Secret Text es creado con JavaScript para lo que se necesita ejecutar los comandos con shell:[UNIX Shell] que interpreta líneas de comando.
*Tener [git] instalado. Si se usa un sistema operativo "UNIX-like", como GNU/Linux o MacOS,ya se tiene una _shell_ (terminal) instalada por defecto (y probablemente `git`también). 
Si se usa Windows puedes usar [Git bash] aunque se recomienda que considar probar :penguin: GNU/Linux como tu Sistema Operativo.
*Instalar [Node.js] y las dependencias del proyecto con el comando `npm (https://nodejs.org/) (que incluye [npm(https://docs.npmjs.com/)).

###Archivos
* `src/index.html`: punto de entrada a Secret Key. Este archivo contiene el _markup_ (HTML) e incluye el CSS y JavaScript necesario.
* `src/cipher.js`: contiene las funciones para cifrar y descifar el texto.
* `src/index.js`: se implementan las funciones iterativas de la aplicación.
* `test/cipher.spec.js`: este archivo contiene tests(pruebas) para asegurar la funcionalidad, y detectar en su momento errores.

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```
###Agradecimientos
A mis compañeras y coaches por el apoyo que hicieron posible este proyecto.

