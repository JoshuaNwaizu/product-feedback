import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '@/slice/authSlice';
import type { RootState, AppDispatch } from '@/store';
import { useEffect } from 'react';

const formSchema: z.ZodObject<
  {
    email: z.ZodString;
    password: z.ZodString;
  },
  z.core.$strip
> = z.object({
  email: z.string().email({ message: 'Enter a valid email' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
});

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, user } = useSelector(
    (state: RootState) => state.auth,
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Dispatch signup action
    try {
      const resultAction = await dispatch(signup(values));

      if (signup.fulfilled.match(resultAction)) {
        // Success case
        alert('Account created successfully!');
        navigate('/auth/login'); // Navigate to login page
      } else if (signup.rejected.match(resultAction)) {
        // Error case already handled by the slice
        console.error('Signup failed:', resultAction.error.message);
      }
    } catch (err) {
      console.error('Signup error:', err);
    }

    // Handle signup logic here
    console.log(values);
  };
  useEffect(() => {
    if (user) {
      navigate('/auth/login');
    }
  }, [user, navigate]);

  return (
    <>
      <h2 className="text-2xl font-bold mb-2 text-center">Create an account</h2>
      <p className="mb-6 text-center text-gray-500">
        Enter your email below to create your account
      </p>

      <Button
        variant="outline"
        className="w-full mb-4 flex items-center justify-center gap-2"
      >
        {/* Google SVG */}
        <svg
          className="w-5 h-5"
          viewBox="0 0 48 48"
        >
          <g>
            <path
              fill="#FFC107"
              d="M44.5 20H24V28.5H36.9C35.5 33.1 31.2 36 24 36C16.3 36 10 29.7 10 22C10 14.3 16.3 8 24 8C27.2 8 29.9 9.1 32 10.9L37.1 6C33.7 3.1 29.2 1 24 1C11.8 1 2 10.8 2 23C2 35.2 11.8 45 24 45C36.2 45 46 35.2 46 23C46 21.7 45.8 20.8 45.5 20Z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.7L12.9 19.2C14.7 15.2 18.9 12 24 12C26.7 12 29.1 12.9 31 14.4L36.2 9.2C32.8 6.3 28.7 4.5 24 4.5C16.7 4.5 10.3 9.6 6.3 14.7Z"
            />
            <path
              fill="#4CAF50"
              d="M24 44.5C29.2 44.5 33.7 42.4 37.1 39.5L31.3 34.8C29.4 36.1 26.9 37 24 37C16.8 37 12.5 33.1 11.1 28.5L4.4 33.2C8.3 39.1 15.5 44.5 24 44.5Z"
            />
            <path
              fill="#1976D2"
              d="M45.5 20H44.5V20H24V28.5H36.9C36.3 30.5 35.1 32.2 33.4 33.4L39.1 38.1C42.2 35.3 44.5 31.5 45.5 27.5C45.8 26.2 46 25.1 46 23C46 21.7 45.8 20.8 45.5 20Z"
            />
          </g>
        </svg>
        Sign up with Google
      </Button>

      <div className="flex items-center my-4">
        <div className="flex-grow h-px bg-gray-200" />
        <span className="mx-2 text-gray-400 text-sm">or continue with</span>
        <div className="flex-grow h-px bg-gray-200" />
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="you@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full hover:bg-[#3A4374] transition-all duration-200 bg-[#AD1FEA]"
          >
            {loading ? 'Signing up' : 'Sign Up'}
          </Button>
          {error && <div className="text-red-500">{error}</div>}
        </form>
      </Form>
      <div className="mt-4 text-center">
        Already have an account?{' '}
        <Link
          to="/auth/login"
          className="text-blue-600  hover:underline "
        >
          Login
        </Link>
      </div>
    </>
  );
};

export default Signup;
