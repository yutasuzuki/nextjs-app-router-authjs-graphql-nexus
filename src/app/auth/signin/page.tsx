'use client'

import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { ChangeEvent, useCallback, useState } from 'react'

export default function Page() {
  const [items, setItems] = useState({ email: '', password: '' })
  const router = useRouter()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await signIn('credentials', {
        email: items.email,
        password: items.password,
        redirect: false,
      })
      if (res) {
        router.push('/dashboard')
      }
    } catch (error: any) {}
  }

  const _handleOnChangeText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value } = e.currentTarget
    setItems((values) => ({
      ...values,
      [name]: value,
    }))
  }, [])

  return (
    <form onSubmit={onSubmit}>
      <h1>sign in</h1>
      <div>
        <div>email</div>
        <input
          name='email'
          type='email'
          autoComplete='email'
          onChange={_handleOnChangeText}
          value={items.email}
          required
        />
      </div>
      <div>
        <div>password</div>
        <input
          name='password'
          type='password'
          autoComplete='new-password'
          onChange={_handleOnChangeText}
          value={items.password}
          required
        />
      </div>
      <button type='submit'>sign in</button>
    </form>
  )
}
