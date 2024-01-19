import React from "react";

const RegistroConGoogle = () => {
  const handleSignInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
      // El usuario ha iniciado sesión con Google correctamente.
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <div className="registro-con-google-container">
      <h2 className="titulo">Crea tu cuenta en Bigbuy!</h2>
      <form action="">
        <form action="#" method="POST">
          <div class="input-container">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
          </div>
          <div class="input-container">
            <label for="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" name="contrasena" required />
            <label for="contrasena">Repetir Contraseña:</label>
            <input type="password" id="contrasena" name="contrasena" required />
          </div>
          <button className="btn-empieza" type="submit">
            Crear una cuenta
          </button>
        </form>
      </form>

      <button
        className="google-login-button btn-empieza"
        onClick={handleSignInWithGoogle}
      >
        Iniciar sesión con Google
      </button>
    </div>
  );
};

export default RegistroConGoogle;
