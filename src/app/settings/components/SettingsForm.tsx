'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import useFormStore from '@/store/useFormStore'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

const schema = z.object({
  name: z.string().nonempty('Name is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

type Settings = z.infer<typeof schema>

export default function SettingsForm() {
  const { data, setData, isSaved } = useFormStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Settings>({
    resolver: zodResolver(schema),
    defaultValues: data,
  })

  const onSubmit = (values: Settings) => {
    setData(values)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name" className='pb-1'>Name</Label>
        <Input id="name" {...register('name')} placeholder="Your full name" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <Label htmlFor="email" className='pb-1'>Email</Label>
        <Input id="email" type="email" {...register('email')} placeholder="you@example.com" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <Label htmlFor="password" className='pb-1'>Password</Label>
        <Input id="password" type="password" {...register('password')} placeholder="Your password" />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      <Button type="submit" className="w-full">
        Save Settings
      </Button>

      {isSaved && (
        <p className="mt-2 text-green-600 text-sm font-medium">Settings saved successfully!</p>
      )}
    </form>
  )
}
