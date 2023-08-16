import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
// import useAuth from "../hooks/useAuth";
import logo from "../assets/image/logo.png";
import useAuth from "../hooks/useAuth";

function Login() {
  const [login, setLogin] = useState(false);
  const [stateLogin, setStateLogin] = useState(false);
  const { signIn, signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <img
        src={logo}
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />
      <div className="relative mt-24 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
        <form onSubmit={handleSubmit(onSubmit)} className=" space-y-8 ">
          <h1 className="text-4xl font-semibold">
            {" "}
            {!stateLogin ? " Sign In" : " Sign up "}
          </h1>
          <div className="space-y-4">
            <label className="inline-block w-full">
              <input
                type="email"
                placeholder="Email"
                className="input"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="p-1 text-[13px] font-light  text-orange-500">
                  Please enter a valid email.
                </p>
              )}
            </label>
            <label className="inline-block w-full">
              <input
                type="password"
                placeholder="Password"
                className="input"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="p-1 text-[13px] font-light  text-orange-500">
                  Your password must contain between 4 and 60 characters.
                </p>
              )}
            </label>
          </div>
          {!stateLogin ? (
            <button
              className="w-full rounded bg-[#e50914] py-3 font-semibold"
              onClick={() => {
                setLogin(true);
              }}
            >
              login
            </button>
          ) : (
            <button
              className="w-full rounded bg-[#e50914] py-3 font-semibold"
              onClick={() => {
                setLogin(false);
              }}
            >
              Sign up
            </button>
          )}
        </form>
        <div className="text-[gray] mt-3">
          New to Netflix?{" "}
          <button
            className="text-white hover:underline"
            onClick={() => {
              setStateLogin(!stateLogin);
            }}
          >
            {!stateLogin ? " Sign up now" : " back to login "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
