import Footer from './Footer'
import Header from './Header'

function Login()
{
    return (
        <div>
            <Header />

            <div className="login-container">
                <div className="login-content-wrapper">
                    <div className="login-svg"></div>
                    <div className="login-details-container">
                        <form>
                            <div class="form-group my-3">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div class="form-group my-3">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div class="form-check my-3">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <button type="submit" class="btn btn-success my-3">Login</button>
                        </form>

                        <div className="social-logins">
                            <h4>Login with</h4>
                            <img className="social-login-icon my-1" src="https://www.drupal.org/files/issues/2020-01-26/google_logo.png" alt="login With Google" />
                            <img className="social-login-icon my-1" src="https://i.stack.imgur.com/oL5c2.png" alt="login With Facebook" />
                            <img className="social-login-icon my-1" src="https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple/images/apple-id-sign-up-with_2x.png" alt="login With Apple" />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Login
