import GenericForm from "../components/GenericForm";

function Login() {
  return (
    <div className="container my-5">
      <GenericForm route="/api/token/" method="login" />
    </div>
  );
}

export default Login;
