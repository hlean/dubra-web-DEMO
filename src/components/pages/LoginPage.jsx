import LoginForm from '../auth/LoginForm';
import Header from '../Header'
import Footer from '../Footer'

const LoginPage = () => {
  return (
    <div>
      <Header />
        <section className="bg-dubraWhite min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md px-4">
          <div className="text-center mb-6">
            <h1 className="text-5xl font-bold text-darkBlue">Bienvenido de nuevo</h1>
          </div>
          <LoginForm />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LoginPage;