'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import { sendMail } from '../lib/mail';

interface InputErrorProps {
  message: string;
}

type Data = {
  email: string;
  name: string;
  message: string;
};

const InputError: FC<InputErrorProps> = ({ message }) => {
  return (
    <motion.p
      className="
        flex
        items-center
        gap-1
        px-2
        font-semibold
        text-red-500
        bg-red-100
        rounded-md
      "
      {...framer_error}
    >
      {message}
    </motion.p>
  );
};

const framer_error: {
  initial: {
    opacity: number;
    y: number;
  };
  animate: {
    opacity: number;
    y: number;
  };
  exit: {
    opacity: number;
    y: number;
  };
  transition: {
    duration: number;
  };
} = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

function ContactForm() {
  const methods = useForm();

  const inputStyle =
    'w-full p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60';
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
      message: '',
    },
  });

  const onSubmit = async (data: Data) => {
    const response = await sendMail({
      name: data.name,
      email: data.email,
      message: data.message,
    });

    if (!response.success) {
      alert(`Error sending email: ${response.message}`);
    } else {
      alert('Email sent successfully');
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col gap-4 " onSubmit={handleSubmit(onSubmit)}>
        <input
          className={inputStyle}
          {...register('name', {
            required: 'The name is required.',
            pattern: {
              value: /^[A-Za-z\s]+$/i,
              message: 'Your name can contain only letters',
            },
          })}
          placeholder="Name"
        />
        {errors.name?.message && (
          <AnimatePresence mode="wait" initial={false}>
            <InputError message={errors.name.message} />
          </AnimatePresence>
        )}
        <input
          className={inputStyle}
          {...register('email', {
            required: 'This is required.',

            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
              message: 'Please enter a valid email',
            },
          })}
          placeholder="Email"
        />
        {errors.email?.message && (
          <AnimatePresence mode="wait" initial={false}>
            <InputError message={errors.email.message} />
          </AnimatePresence>
        )}
        <input
          className={inputStyle}
          {...register('message', {
            required: 'This is required.',

            pattern: {
              value: /^[a-zA-Z0-9\s.,!?'"()-]+$/,
              message: 'Please enter a valid text',
            },
          })}
          placeholder="Text message"
        />
        {errors.message?.message && (
          <AnimatePresence mode="wait" initial={false}>
            <InputError message={errors.message.message} />
          </AnimatePresence>
        )}
        <input
          type="submit"
          className="cursor-pointer text-white p-1 hover:text-black  hover:bg-blue-200 m-auto rounded bg-blue-600 w-[100px]"
        />
      </form>
    </FormProvider>
  );
}

export default ContactForm;
