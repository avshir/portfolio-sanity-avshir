//docs.web3forms.com/how-to-guides/js-frameworks/react-js/react-js
import { useEffect, useState } from "react";
import { useForm, useWatch, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import Button from "./../Button";
import { LoaderIcon } from "./../../constants/icons";

import { NAME_EMAIL_FROM, NAME_WEBSITE } from "../../constants/index";
import { EMAIL_ACCESS_KEY } from "../../constants/email_key";

interface IFormValues {
  access_key: string;
  from_name: string;
  botcheck: string;
  subject: string;
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<IFormValues>({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [jsonMessage, setJsonMessage] = useState("");

  const userName = useWatch({
    control,
    name: "name",
    defaultValue: "Someone",
  });

  useEffect(() => {
    setValue("subject", `${userName} sent a message from ${NAME_WEBSITE}`);
  }, [userName, setValue]);

  const onSubmit: SubmitHandler<IFormValues> = async (data, e) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data, null, 2),
      });
      const json = await response.json();

      if (json.success) {
        setIsSuccess(true);
        setJsonMessage(json.message);
        e?.target.reset();
        reset();
      } else {
        setIsSuccess(false);
        setJsonMessage(json.message);
      }
    } catch (error) {
      setIsSuccess(false);
      setJsonMessage(
        "Client Error. Please check the console.log for more info"
      );
      console.log(error);
    }
  };

  return (
    <>
      {!isSubmitSuccessful && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-6 max-w-md"
        >
          <input
            type="hidden"
            value={EMAIL_ACCESS_KEY}
            {...register("access_key")}
          />
          <input type="hidden" {...register("subject")} />
          <input
            type="hidden"
            value={`From ${NAME_EMAIL_FROM}`}
            {...register("from_name")}
          />
          <input
            type="checkbox"
            id=""
            className="hidden"
            style={{ display: "none" }}
            {...register("botcheck")}
          ></input>

          <div className="block space-y-1">
            <label htmlFor="name">Full Name *</label>
            <input
              id="name"
              type="text"
              placeholder="Full Name"
              autoComplete="false"
              className={`block bg-white w-full px-3 py-2 rounded shadow-sm focus:ring focus:ring-opacity-100 focus:ring-primary ${
                errors.name
                  ? "border-red-600 focus:ring-red-600 ring-red-100"
                  : "border-gray-300 focus:ring-primary ring-primary"
              }`}
              {...register("name", {
                required: "Full name is required",
                minLength: {
                  value: 3,
                  message: "Enter at least 3 characters",
                },
                maxLength: {
                  value: 80,
                  message: "Enter up to 300 characters",
                },
              })}
            />
            {errors.name && (
              <div className="mt-1 text-red-600">
                <small>{errors.name.message}</small>
              </div>
            )}
          </div>

          <div className="block space-y-1">
            <label htmlFor="email_address">Email *</label>
            <input
              id="email_address"
              type="email"
              placeholder="kovalski@gmail.com"
              autoComplete="false"
              className={`block bg-white px-3 py-2 w-full rounded shadow-sm focus:ring focus:ring-opacity-100 focus:ring-primary ${
                errors.name
                  ? "border-red-600 focus:ring-red-600 ring-red-100"
                  : "border-gray-300 focus:ring-primary ring-primary"
              }`}
              {...register("email", {
                required: "Enter your email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors.email && (
              <div className="mt-1 text-red-600">
                <small>{errors.email.message}</small>
              </div>
            )}
          </div>

          <div className="block space-y-1">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Your Message"
              className={`block bg-white px-3 py-2 w-full rounded shadow-sm focus:ring focus:ring-opacity-100 focus:ring-primary ${
                errors.name
                  ? "border-red-600 focus:ring-red-600 ring-red-100"
                  : "border-gray-300 focus:ring-primary ring-primary"
              }`}
              {...register("message", {
                required: "Enter your Message",
                minLength: {
                  value: 15,
                  message: "Enter at least 15 characters",
                },
                maxLength: {
                  value: 300,
                  message: "Enter up to 300 characters",
                },
              })}
            />
            {errors.message && (
              <div className="mt-1 text-red-600">
                {" "}
                <small>{errors.message.message}</small>
              </div>
            )}
            <div className="text-sm">* required fields</div>
          </div>

          <div className="flex justify-between">
            <Button
              size="md"
              type="submit"
              color="accent"
              className="min-w-[140px]"
            >
              {isSubmitting ? (
                <LoaderIcon className="size-5 mx-auto animate-spin" />
              ) : (
                "Send"
              )}
            </Button>
            <Button type="reset" size="md" color="outlineNo">
              {isSubmitting ? null : "Clear form"}
            </Button>
          </div>
        </form>
      )}

      {isSubmitSuccessful && isSuccess && (
        <div className="flex items-center justify-center">
          <Button
            size="md"
            color="accent"
            className="mt-4 self-start min-w-[140px]"
            onClick={() => reset()}
          >
            Go back
          </Button>
          {toast.success(jsonMessage, { position: "top-center" })}
        </div>
      )}

      {isSubmitSuccessful && !isSuccess && (
        <div className="flex items-center justify-center">
          <Button
            size="md"
            color="accent"
            className="mt-4 self-start min-w-[140px]"
            onClick={() => reset()}
          >
            Try Again
          </Button>
          {toast.error(
            <div>
              <div>Oops, Something went wrong!</div>
              <div>{jsonMessage}</div>
            </div>,
            { position: "top-center" }
          )}
        </div>
      )}
    </>
  );
};
