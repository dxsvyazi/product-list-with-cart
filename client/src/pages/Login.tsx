import { FC } from 'react';
import { toast } from 'sonner';
import { z } from 'zod/v4-mini';
import { cn } from '@shared/utils/utils';
import { useUserStore } from '@store/userStore';
import { useNavigate } from 'react-router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';
import Container from '@components/base/Container';
import Button from '@components/base/Button';
import FormField from '@components/FormField';
import { postData } from '@api/user.api';

const schema = z.object({
  email: z.email(),
  password: z.string().check(z.minLength(8), z.trim()),
});

type FormFields = z.infer<typeof schema>;

const Login: FC = () => {
  const navigate = useNavigate();

  const setToken = useUserStore(({ setToken }) => setToken);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormFields>({
    resolver: standardSchemaResolver(schema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmitHandler: SubmitHandler<FormFields> = async (data) => {
    const response = await postData('login', data);
    const json = await response.json();

    if (response.status !== 200) {
      const { message = '' } = json;
      toast.error(message);
    } else {
      const { token = '' } = json;
      setToken(token);
      navigate('/');
      toast.success('Logged in successfully!');
    }
    reset();
  };

  return (
    <Container
      as='form'
      className='bg-white p-4'
      onSubmit={handleSubmit(onSubmitHandler)}
      variants={{
        flow: 'col',
        items: 'centered',
        rounded: 'xl',
        bWidth: 3,
        bColor: 'info-primary',
      }}
    >
      <h1>Log In to App</h1>
      <FormField
        label='Email'
        type='email'
        className={cn(
          'pl-1 outline-2 rounded-md',
          'outline-amber-500 focus:outline-amber-600'
        )}
        error={errors.email?.message || ''}
        {...register('email')}
      />
      <FormField
        label='Password'
        type='password'
        className={cn(
          'pl-1 outline-2 rounded-md',
          'outline-amber-500 focus:outline-amber-600'
        )}
        error={errors.password?.message || ''}
        {...register('password')}
      />
      <Button
        disabled={isSubmitting || !isValid || !errors}
        className='w-full h-10'
        variants={{ color: 'orange' }}
      >
        Sign In
      </Button>
    </Container>
  );
};

export default Login;
