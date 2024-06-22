export default function Page() {
  return (
    <form>
      <h1>Sign in</h1>
      <fieldset>
        <legend className="visibility-hidden">Credentials</legend>
        <label>
          <span>Email:</span>
          <input type="text" name="email" id="email" />
        </label>
        <label>
          <span>Password:</span>
          <input type="password" name="password" id="password" />
        </label>
      </fieldset>
      <button>Sign in</button>
    </form>
  );
}
