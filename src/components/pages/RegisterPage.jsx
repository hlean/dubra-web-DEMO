import Header from '../Header'
import Footer from '../Footer'
import RegisterForm from '../auth/RegisterForm';

const RegisterPage = () => {
  return (
    <div>
      <Header/>
        <section className="bg-dubraWhite min-h-screen flex items-center justify-center">
          <div className="w-full max-w-md px-4">
            <div className="text-center mb-6">
              <h1 className="text-5xl font-bold text-darkBlue">¡Comencemos!</h1>
            </div>
              <RegisterForm />
          </div>
        </section>
      <Footer />
    </div>
  );
};

export default RegisterPage;