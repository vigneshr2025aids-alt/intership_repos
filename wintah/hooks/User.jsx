import React, { useState, useEffect } from 'react'

export const Users = () => {
    const [products, setProducts] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json()
                setProducts(data)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }

        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json()
                setUsers(data)
            } catch (error) {
                console.error('Error fetching users:', error)
            }
        }

        fetchProducts()
        fetchUsers()
    }, [])

    const handleAddTestUser = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: 'Test User', email: 'testuser@example.com' })
            })
            const newUser = await res.json()
            setUsers(prev => [
                ...prev,
                { ...newUser, id: newUser.id || Date.now(), name: 'Test User', email: 'testuser@example.com' }
            ])
        } catch (e) {
            setUsers(prev => [
                ...prev,
                { id: Date.now(), name: 'Test User', email: 'testuser@example.com' }
            ])
        }
    }

    return (
        <div className="mt-8 text-black">
            <h2 className="text-xl font-bold mb-1">Fake Store Products</h2>
            <button
                type="button"
                onClick={handleAddTestUser}
                className="mb-3 text-sm text-black hover:underline cursor-pointer block text-left bg-transparent border-0 p-0"
            >
                Add test user
            </button>

            <table className="w-full border-collapse border border-gray-300 mb-8">
                <thead>
                    <tr className="border-b border-gray-300">
                        <th className="py-2 px-4 text-center font-bold border border-gray-300">
                            Product name
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className="border-b border-gray-300">
                            <td className="py-2 px-4 text-left border border-gray-300">
                                {product.title}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2 className="text-xl font-bold mb-3">Users</h2>
            <table className="border-collapse border border-gray-300 mb-8">
                <thead>
                    <tr className="border-b border-gray-300">
                        <th className="py-2 px-6 text-center font-bold border border-gray-300 min-w-[180px]">
                            Name
                        </th>
                        <th className="py-2 px-6 text-center font-bold border border-gray-300 min-w-[240px]">
                            Email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="border-b border-gray-300">
                            <td className="py-2 px-6 text-left border border-gray-300">
                                {user.name}
                            </td>
                            <td className="py-2 px-6 text-left border border-gray-300">
                                {user.email}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}