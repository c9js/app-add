/*────────────────────────────────────────────────────────────────────────────────────────────────*/

Object.defineProperties(global,{__:{set:v=>process.exit(_=v)},_:{set:console.log}});
Object.defineProperty(global, '$', {value:{}});

/*────────────────────────────────────────────────────────────────────────────────────────────────*/

let fs = require('fs').promises;

let files = [
    '../start',
    'start2',
    '../.gitignore',
    'start1'
];

class Cli {
/*┌───────────────┐
  │ Список файлов │
  └───────────────┘*/
    files = [
        '../start',
        'start2',
        '../.gitignore',
        'start1'
    ];
    
/*┌───────────────┐
  │ Список ошибок │
  └───────────────┘*/
    ERROR_ACCESS = 'Ошибка! Нет доступа к файлам!';
    
/*┌─────────────────────┐
  │ Обрабатывает ошибку │
  └─────────────────────┘*/
    error(error) {
        return Promise.reject(error.join('\n'));
    }
    
/*┌─────────────┐
  │ Конструктор │
  └─────────────┘*/
    constructor() {
    // Проходим по списку файлов
        Promise.allSettled(
        // Проверяем доступность
            this.files.map(file => fs.access(file))
        )
        
    // Получаем список недоступных файлов
        .then(r => r.filter(r => r.status == 'rejected').map(r => r.reason.path))
        
    // Выводим список недоступных файлов
        .then(errorFiles => errorFiles.length && this.error([this.ERROR_ACCESS, ...errorFiles]))
        
    // Копируем файлы
        .then(e => {
            _='good'
        })
        
    // Выводи сообщение об ошибке
        .catch(e => _=e)
    }
}

new Cli();

(async e => {
/*┌───────────────┐
  │ Список ошибок │
  └───────────────┘*/
    const ERROR_ACCESS = 'Ошибка! Нет доступа к файлам!';
    
/*┌─────────────────────┐
  │ Обрабатывает ошибку │
  └─────────────────────┘*/
    let _error = error => Promise.reject(error.join('\n'));
    
// Проходим по списку файлов
    Promise.allSettled(
    // Проверяем доступность
        files.map(file => fs.access(file))
    )
    
// Получаем список недоступных файлов
    .then(r => r.filter(r => r.status == 'rejected').map(r => r.reason.path))
    
// Выводим список недоступных файлов
    .then(errorFiles => errorFiles.length && _error([ERROR_ACCESS, ...errorFiles]))
    
// Копируем файлы
    .then(e => {
        _='good'
    })
    
// Выводи сообщение об ошибке
    .catch(e => _=e)
})();
