
(function() {
  const TEMPO_LIMITE = 30 * 60 * 1000; // 30 minutos
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
