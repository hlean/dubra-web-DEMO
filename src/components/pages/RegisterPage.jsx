import RegisterForm from '../auth/RegisterForm';
import HeroSection from '../HeroSection';

const RegisterPage = () => {
  return (
        // <section className="bg-dubraWhite min-h-screen flex items-center justify-center pt-5">
        //   <div className="w-full max-w-md px-4">
        //     <div className="text-center mb-6">
        //       <h1 className="text-5xl font-bold text-darkBlue">¡Comencemos!</h1>
        //     </div>
        //       <RegisterForm />
        //   </div>
        // </section>
        <div className='pt-20'>
          <HeroSection
          title={'¡Comencemos!'}
          extraComponent={<RegisterForm/>}
          background={'bg-gradient-to-br from-dubraText to-dubraPrimary'}
          fit={true}
          />
        </div>
        
  );
};

export default RegisterPage;