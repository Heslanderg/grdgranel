
(function() {
  const TEMPO_LIMITE = 60 * 60 * 1000; // 1 hora
  let timeout;

  function resetarInatividade() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (firebase && firebase.auth) {
        firebase.auth().signOut().then(() => {
          window.location.href = "index.html";
        });
      }
    }, TEMPO_LIMITE);
  }

  ['click', 'mousemove', 'keydown', 'scroll'].forEach(evt =>
    document.addEventListener(evt, resetarInatividade)
  );

  resetarInatividade();
})();
