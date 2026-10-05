// src/components/admin/AdminDashboard.tsx
import { useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { db, auth } from '../../lib/firebase';
import { collection, addDoc, updateDoc, deleteDoc, doc, writeBatch } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { products as staticProducts } from '../../data/products';

export default function AdminDashboard() {
    const { products, loading } = useProducts();
    const [seeding, setSeeding] = useState(false);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', desc: '', emoji: '🌿', category: 'oils', inStock: true });

    const handleSeed = async () => {
        if (!confirm('This will import all initial products into the database. Existing items will not be overwritten. Continue?')) return;
        setSeeding(true);
        try {
            const batch = writeBatch(db);
            let count = 0;

            Object.entries(staticProducts).forEach(([category, items]) => {
                items.forEach((item) => {
                    const docRef = doc(collection(db, 'products'));
                    batch.set(docRef, { ...item, category });
                    count++;
                });
            });

            await batch.commit();
            alert(`Successfully imported ${count} products!`);
        } catch (err) {
            console.error(err);
            alert('Failed to seed data');
        } finally {
            setSeeding(false);
        }
    };

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'products'), newProduct);
            setNewProduct({ name: '', price: '', desc: '', emoji: '🌿', category: 'oils', inStock: true });
        } catch (err) {
            alert('Failed to add product');
        }
    };

    const handleUpdate = async (id: string, updates: any) => {
        try {
            await updateDoc(doc(db, 'products', id), updates);
        } catch (err) {
            alert('Failed to update product');
        }
    };

    const handleDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this product?')) {
            try {
                await deleteDoc(doc(db, 'products', id));
            } catch (err) {
                alert('Failed to delete product');
            }
        }
    };

    if (loading) return <div style={{ padding: '40px', textAlign: 'center' }}>Loading dashboard...</div>;

    return (
        <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto', fontFamily: "'Inter', sans-serif" }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <h1 style={{ color: '#2c1a0e' }}>Store Management</h1>
                <button
                    onClick={() => signOut(auth)}
                    style={{ background: '#fee2e2', color: '#991b1b', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}
                >
                    Logout
                </button>
            </div>

            {/* Add New Product Form */}
            <section style={{ background: '#fdf8f0', padding: '24px', borderRadius: '12px', marginBottom: '40px', border: '1px solid #f0e6d6' }}>
                <h2 style={{ marginBottom: '16px', fontSize: '1.2rem', color: '#c8922a' }}>Add New Product</h2>
                <form onSubmit={handleAdd} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                    <input placeholder="Name" value={newProduct.name} onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} required style={{ padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db' }} />
                    <input placeholder="Price (e.g. ₹180/L)" value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} required style={{ padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db' }} />
                    <input placeholder="Emoji" value={newProduct.emoji} onChange={e => setNewProduct({ ...newProduct, emoji: e.target.value })} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db' }} />
                    <select value={newProduct.category} onChange={e => setNewProduct({ ...newProduct, category: e.target.value })} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db' }}>
                        <option value="oils">Oils</option>
                        <option value="ghees">Ghees</option>
                        <option value="pickles">Pickles</option>
                        <option value="powders">Powders</option>
                    </select>
                    <textarea placeholder="Description" value={newProduct.desc} onChange={e => setNewProduct({ ...newProduct, desc: e.target.value })} style={{ gridColumn: '1 / -1', padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db' }} />
                    <button type="submit" disabled={seeding} style={{ gridColumn: '1 / -1', background: '#4a7c59', color: '#fff', border: 'none', padding: '12px', borderRadius: '6px', cursor: 'pointer', fontWeight: 700 }}>{seeding ? 'Processing...' : 'Add Product'}</button>
                </form>
            </section>

            {/* Seed Data Utility (Only show if DB is likely empty) */}
            {Object.values(products).every(arr => arr.length === 0) && (
                <section style={{ background: '#e0f2fe', padding: '24px', borderRadius: '12px', marginBottom: '40px', border: '1px solid #bae6fd' }}>
                    <h2 style={{ marginBottom: '8px', fontSize: '1.1rem', color: '#0369a1' }}>Database is empty</h2>
                    <p style={{ fontSize: '0.9rem', color: '#0c4a6e', marginBottom: '16px' }}>Would you like to import the initial products from the menu?</p>
                    <button
                        onClick={handleSeed}
                        disabled={seeding}
                        style={{ background: '#0ea5e9', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}
                    >
                        {seeding ? 'Importing...' : 'Import Initial Products'}
                    </button>
                </section>
            )}

            {/* Product List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {Object.entries(products).map(([category, items]) => (
                    <div key={category}>
                        <h3 style={{ textTransform: 'capitalize', marginBottom: '12px', borderBottom: '2px solid #f0e6d6', paddingBottom: '4px' }}>{category}</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {items.map((p: any) => (
                                <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: '#fff', borderRadius: '8px', border: '1px solid #f0e6d6' }}>
                                    <div>
                                        <span style={{ fontSize: '0.6rem', background: '#f0e6d6', padding: '2px 6px', borderRadius: '4px', marginRight: '8px', textTransform: 'uppercase' }}>{category}</span>
                                        <strong>{p.emoji} {p.name}</strong> - {p.price}
                                        <div style={{ fontSize: '0.85rem', color: '#9a7a5a' }}>{p.desc}</div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                        <select
                                            value={category}
                                            onChange={(e) => handleUpdate(p.id, { category: e.target.value })}
                                            style={{ fontSize: '0.75rem', padding: '4px', borderRadius: '4px', border: '1px solid #d1d5db' }}
                                        >
                                            <option value="oils">Oils</option>
                                            <option value="ghees">Ghees</option>
                                            <option value="pickles">Pickles</option>
                                            <option value="powders">Powders</option>
                                        </select>
                                        <button
                                            onClick={() => handleUpdate(p.id, { inStock: !p.inStock })}
                                            style={{
                                                fontSize: '0.75rem',
                                                padding: '4px 8px',
                                                borderRadius: '4px',
                                                background: p.inStock ? '#dcfce7' : '#fee2e2',
                                                color: p.inStock ? '#166534' : '#991b1b',
                                                border: 'none',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {p.inStock ? 'In Stock' : 'Sold Out'}
                                        </button>
                                        <button
                                            onClick={() => handleDelete(p.id)}
                                            style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem' }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
