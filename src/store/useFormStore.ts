import { create } from 'zustand'

interface FormData {
  name: string
  email: string
  password: string
}

type FormState = {
  data: FormData
  isSaved: boolean
  setData: (newData: FormData) => void
}

const useFormStore = create<FormState>((set) => ({
  data: { name: '', email: '', password: '' },
  isSaved: false,
  setData: (newData) =>
    set({
      data: newData,
      isSaved: true,
    })
}))

export default useFormStore
