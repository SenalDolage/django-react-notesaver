import GenericForm from "../components/GenericForm";

function Register() {
  return (
    <div className="container">
      <GenericForm route="/api/user/register/" method="register" />
    </div>
  );
}

export default Register;
