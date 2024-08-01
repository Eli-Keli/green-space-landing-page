import "../styles/Login.css"

const LoginPage = () => {
  return (
    <section>
      <div className="login-container">
        <h2>Sign in to Kijani Kilimani</h2>
        <form action="">

          <label for="email">Email</label>
          <input type="email" name="email" id="email" placeholder="example@gmail.com" />

          <label for="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" />

          <a href="/login">Forgot password</a>

          <button className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    </section>
  )
}

export default LoginPage
