/*▄────────▄
  █        █
  █  Ядро  █
  █        █
  ▀────────▀*/
Object.defineProperty(global, '$', {value: {
/*┌─────────────────────────────┐
  │ Очищает все сборщики мусора │
  └─────────────────────────────┘*/
    gc: () => Object.values($.gc).forEach(callback => callback())
}});

/*▄───────────▄
  █           █
  █  Консоль  █
  █           █
  ▀───────────▀*/
Object.defineProperties(global,{__:{set:v=>process.exit(_=v)},_:{set:console.log}});

/*▄────────────────────────▄
  █                        █
  █  Работа с MVC-моделью  █
  █                        █
  ▀────────────────────────▀*/
require('./entrypoint');
require('./text');
require('./view');
require('./model');
require('./controller');
