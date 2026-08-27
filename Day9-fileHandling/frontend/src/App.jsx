

import axios from 'axios';
import { useForm } from 'react-hook-form'

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = (data) => {
    const formData= new FormData();
    formData.append('name',data.name);
    formData.append('email',data.email);
     Array.from(data.image).forEach((file) => {
    formData.append("images", file);
  });
    axios.post('http://localhost:3000/users',formData,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
    .then((res)=>{
      console.log(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
    console.log(formData);
    reset()
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <form
        className="w-full max-w-md space-y-5 rounded-xl bg-white p-8 shadow-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Create profile</h1>
          <p className="mt-1 text-sm text-slate-500">Add your details below.</p>
        </div>

        <label className="block text-sm font-medium text-slate-700">
          Name
          <input
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            name="name"
            type="text"
            placeholder="Your name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Email
          <input
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            name="email"
            type="email"
            placeholder="you@example.com"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Enter a valid email',
              },
            })}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </label>

       <label className="block text-sm font-medium text-slate-700">
  Images

  <input
    className="mt-2 block w-full cursor-pointer rounded-lg border border-slate-300 text-sm text-slate-500 file:mr-4 file:border-0 file:bg-slate-100 file:px-4 file:py-2 file:font-medium file:text-slate-700 hover:file:bg-slate-200"
    type="file"
    accept="image/*"
    multiple
    {...register("images", {
      required: "At least one image is required",
    })}
  />

  {errors.images && (
    <p className="mt-1 text-sm text-red-600">
      {errors.images.message}
    </p>
  )}
</label>

        <button
          className="w-full rounded-lg bg-slate-900 px-4 py-2.5 font-medium text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </main>
  )
}

export default App