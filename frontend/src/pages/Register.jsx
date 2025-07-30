import GenericForm from "../components/GenericForm";

function Register() {
  return (
    <div className="container my-5">
      <GenericForm route="/api/user/register/" method="register" />
    </div>
  );
}

export default Register;
