import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function useAuth() {
  const router = useRouter();
  const [error, setError] = useState('');

  const login = async (email: string, password: string) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      setError('Invalid login');
    } else {
      router.push('/admin');
    }
  };

  const register = async (email: string, password: string) => {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      setError('Register failed');
    } else {
      router.push('/admin/login');
    }
  };

  return { login, register, error };
}
