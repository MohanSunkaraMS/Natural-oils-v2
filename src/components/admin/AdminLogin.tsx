// src/components/admin/AdminLogin.tsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err: any) {
            setError('Invalid credentials. Please check your email and password.');
        }
    };

    return (
        <div style={{
            maxWidth: '400px',
            margin: '100px auto',
            padding: '40px',
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
            fontFamily: "'Inter', sans-serif"
        }}>
            <h2 style={{ textAlign: 'center', marginBottom: '24px', color: '#2c1a0e' }}>Admin Login</h2>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#7a5c3a' }}>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #d1d5db' }}
                        required
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#7a5c3a' }}>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #d1d5db' }}
                        required
                    />
                </div>
                {error && <p style={{ color: '#ef4444', fontSize: '0.85rem' }}>{error}</p>}
                <button
                    type="submit"
                    style={{
                        background: '#c8922a',
                        color: '#fff',
                        border: 'none',
                        padding: '12px',
                        borderRadius: '6px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        marginTop: '8px'
                    }}
                >
                    Login
                </button>
            </form>
        </div>
    );
}
