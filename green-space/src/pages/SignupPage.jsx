import "../styles/Signup.css"

const SignupPage = () => {
  return (
    <section>
      <div class="signup-container">
        <h2>Create an account</h2>
        <form action="">
          <label for="first-name">First name</label>
          <input type="text" name="first-name" id="first-name" placeholder="First name" />

          <label for="last-name">Last name</label>
          <input type="text" name="last-name" id="last-name" placeholder="Last name" />

          <label for="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Email address" />

          <label for="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" />

          <label for="checkbox">
            <input type="checkbox" id="checkbox" />
            <p>I agree to the terms of service and policy</p>
          </label>

          <button class="btn btn-primary">Sign Up</button>
        </form>
      </div>
    </section>
  )
}

export default SignupPage
