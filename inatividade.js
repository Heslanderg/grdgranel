
(function() {
  const TEMPO_LIMITE = 10 * 60 * 1000; // 10 minutos
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
