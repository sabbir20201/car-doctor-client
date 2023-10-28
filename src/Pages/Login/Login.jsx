import { Link } from 'react-router-dom';
import img from '../../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from './../../AuthProvider/AuthProvider';
const Login = () => {

  const {signIn} = useContext(AuthContext)

  const handleLogin = event => {
      event.preventDefault()
      const form = event.target
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;

      signIn(email, password, name)
      .then(result => {
          const user = result.user;
          console.log(user);
      })
      .catch(error => {
          console.log(error);
      })

  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-12">
            <img src={img} />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

            <h1 className="text-3xl font-bold text-center">Login </h1>
            <form onSubmit={handleLogin} className="card-body">
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">

                <input className="btn btn-primary" type='submit' value='login' />
              </div>
            </form>
            <p className='my-4 text-center'>New to Cars Doctors
              <Link className=' text-orange-500 font-bold' to="/signup">
              Sign UP
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;