/*▄──────────────────────────────▄
  █                              █
  █  Controller: Auth            █
  █  • Авторизация (управление)  █
  █                              █
  ▀──────────────────────────────▀*/
$.Controller.Auth({
    'focus':     $.view.Auth.focus,     // Устанавливает фокус
    'toggle':    $.view.Auth.toggle,    // Переключатель показать/скрыть ключ-доступа
    'hideError': $.view.Auth.hideError, // Скрывает сообщение об ошибке
    'showError': $.view.Auth.showError, // Показывает сообщение об ошибке
    'getToken':  $.view.Auth.getToken,  // Получает код-достпа
    'loading':   $.view.Auth.loading,   // Показывает загрузку
    'auth':      $.model.Auth.auth      // Авторизация
});
