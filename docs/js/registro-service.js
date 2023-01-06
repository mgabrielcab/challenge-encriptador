navigator.serviceWorker.register("/docs/sw.js",{scope:'/docs/'}).then(function (registration) {
    console.log("El servicio de trabajo se ha registrado correctamente: ", registration );
  })
  .catch(function (error) {
    console.log("Error al registrar el servicio de trabajo: ", error);
  });