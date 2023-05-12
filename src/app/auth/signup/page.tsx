'use client'

import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { ChangeEvent, useCallback, useState } from 'react'

const SIGNUP_USER = gql`
  mutation SignupUser($name: String!, $email: String!, $password: String!) {
    signupUser(name: $name, email: $email, password: $password) {
      id
      uid
      name
      email
    }
  }
`

export default function Page() {
  const [items, setItems] = useState({ name: '', email: '', password: '' })
  const [signupUser, { loading: creating }] = useMutation(SIGNUP_USER)
  const router = useRouter()

  const _handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (creating) return
    try {
      const res = await signupUser({
        variables: items,
      })
      if (res.data?.signupUser) {
        await signIn('credentials', {
          email: items.email,
          password: items.password,
          redirect: false,
        })
        router.push('/dashboard')
      }
    } catch (error: any) {
      console.error(error)
    }
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
    <form onSubmit={_handleOnSubmit}>
      <h1>sign up</h1>
      <div>
        <div>name</div>
        <input name='name' onChange={_handleOnChangeText} value={items.name} required />
      </div>
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
      <button type='submit'>sign up</button>
    </form>
  )
}
