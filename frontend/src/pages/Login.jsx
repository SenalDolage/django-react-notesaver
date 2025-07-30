import GenericForm from "../components/GenericForm";

function Login() {
  return (
    <div className="container">
      <GenericForm route="/api/token/" method="login" />
    </div>
  );
}

export default Login;
