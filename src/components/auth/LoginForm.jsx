import React from 'react';
import FormBuilder from '../FormBuilder';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL, ROUTES } from '../../lib/constants';

const schema = z.object({
  email: z.string().min(1, 'El email es obligatorio').email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

export default function LoginForm() {
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // El token recaptcha lo recibe el FormBuilder y lo pasa acá dentro de data
    const { email, password, recaptchaToken } = data;

    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, recaptchaToken }),
    });

    if (!res.ok) {
      const result = await res.json();
      throw new Error(result.error || 'Error al loguear');
    }

    navigate('/dashboard');
  };

  return (
    <FormBuilder
      title="Iniciar sesión"
      description="Accedé a tu cuenta para gestionar tus envíos"
      fields={[
        { name: 'email', label: 'Correo electrónico', type: 'email', placeholder: 'nombre@ejemplo.com' },
        { name: 'password', label: 'Contraseña', type: 'password', placeholder: '******' },
      ]}
      schema={schema}
      defaultValues={{
        email: '',
        password: '',
      }}
      onSubmit={onSubmit}
      footer={
        <p className="text-md text-muted-foreground">
          ¿No tenés una cuenta?{' '}
          <a href={ROUTES.REGISTER} className="text-terracotta hover:underline">
            Registrate
          </a>
        </p>
      }
    />
  );
}
