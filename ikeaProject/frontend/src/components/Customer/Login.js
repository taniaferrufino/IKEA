// import { Link } from "react-router-dom";
// import logo from "../logo.svg";
function Login(props) {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8 col-12 offset-2">
            <div className="card">
              <h4 className="card-header text-center">Inicio de Usuario</h4>
              <div className="card-body">
                <form>
  
                  <div class="mb-3">
                    <label for="username" class="form-label">
                      Nombre Usuario
                    </label>
                    <input type="text" class="form-control" id="username" />
                  </div>
                  <div class="mb-3">
                    <div className="md-3">
                      <label for="pwd" class="form-label">
                        Contraseña
                      </label>
                      <input type="password"  name="password" class="form-control" id="pwd" />
                    </div>
                  </div>
  
                  <button type="submit" class="btn btn-success">
                    Acceder
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Login;
  