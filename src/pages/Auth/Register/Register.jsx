import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Icon from "../../../assets/UploadIcon.png";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  const { registerUser, googleSignIn, updateUserProfile } = useAuth();

  const handleRegister = (data) => {
    console.log(data);

    const profileImage = data.photo[0];

    registerUser(data.email, data.password)
      .then(() => {
        //store the image and get the photo url
        const formData = new FormData();
        formData.append("image", profileImage);

        const imageAPI = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host
        }`;

        axios.post(imageAPI, formData).then((res) => {
          //updateUserProfile
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUserProfile(userProfile)
            .then(() => toast("profile updated"))
            .catch((error) => toast(error.message));
        });

        navigate("/");
        toast.success("Registration Successful");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        navigate(location?.state || "/");
        toast.success("Registration with Google is Successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <h2 className="font-black text-secondary text-5xl">Create an Account</h2>
      <p className="font-medium text-xl py-5">Register with ZapShift</p>
      <div className="card  w-full max-w-sm shrink-0 ">
        <div>
          <form onSubmit={handleSubmit(handleRegister)}>
            <fieldset className="fieldset">
              <label className="cursor-pointer py-2">
                <img src={Icon} alt="" />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  {...register("photo", { required: true })}
                />
              </label>
              {errors.photo && (
                <p className="text-red-500">Photo is Required</p>
              )}
              <label className="label text-accent-content text-sm">Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="input"
                placeholder="Name"
              />
              {errors.name && <p className="text-red-500">Name is Required</p>}
              <label className="label text-accent-content text-sm">Email</label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="input"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">Email is Required</p>
              )}

              <label className="label text-accent-content text-sm">
                Password
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 6,
                    message: "Password Must be at least 6 characters",
                  },
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/,
                    message:
                      "Must contain uppercase, lowercase, number and special character",
                  },
                })}
                type="password"
                className="input"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is Required</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">{errors.password.message}</p>
              )}

              <button className="btn  bg-primary text-sm text-accent-content mt-4">
                Sign Up
              </button>
            </fieldset>
          </form>
          <p className="py-2 text-base-content">
            Already have an account?{" "}
            <Link
              state={location.state}
              to="/login"
              className="text-primary hover:text-secondary underline"
            >
              Login
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-base text-black w-full border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
