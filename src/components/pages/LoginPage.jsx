import LoginForm from '../auth/LoginForm';
import HeroSection from '../HeroSection';

const LoginPage = () => {
  return (
    // <div>
    //     <section className="bg-dubraWhite min-h-screen flex items-center justify-center">
    //     <div className="w-full max-w-md px-4">
    //       <div className="text-center mb-6">
    //         <h1 className="text-5xl font-bold text-darkBlue">Bienvenido de nuevo</h1>
    //       </div>
    //       <LoginForm />
    //     </div>
    //   </section>
    // </div>
    <div className='pt-20'>
          <HeroSection
          title={'Bienvenido de nuevo'}
          extraComponent={<LoginForm/>}
          background={'bg-gradient-to-br from-dubraText to-dubraPrimary'}
          fit={true}
          />
    </div>
  );
};

export default LoginPage;