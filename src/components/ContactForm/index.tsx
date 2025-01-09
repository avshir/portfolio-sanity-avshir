//docs.web3forms.com/how-to-guides/js-frameworks/react-js/react-js
import { useEffect, useState } from "react";
import { useForm, useWatch, SubmitHandler } from "react-hook-form";

import Button from "./../Button";
import { LoaderIcon } from "./../../constants/icons"
import { Snackbar } from "../Snackbar";
import { EMAIL_ACCESS_KEY } from "../../constants/email_key";

export const NAME_WEBSITE = "portfolio-avshir.pl";
export const NAME_THEME = "portfolio-avshir";

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
  const [Message, setMessage] = useState("");

  const userName = useWatch({
    control,
    name: "name",
    defaultValue: "Someone",
  });

  useEffect(() => {
    setValue("subject", `${userName} sent a message from ${NAME_WEBSITE}`);
  }, [userName, setValue]);

  const onSubmit: SubmitHandler<IFormValues> = async (data, e) => {
    console.log(data);
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
        setMessage(json.message);
        e?.target.reset();
        reset();
      } else {
        setIsSuccess(false);
        setMessage(json.message);
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage("Client Error. Please check the console.log for more info");
      console.log(error);
    }
  };

  return (
    <>
      {!isSubmitSuccessful && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
        >
          <input
            type="hidden"
            value={EMAIL_ACCESS_KEY}
            {...register("access_key")}
          />
          <input type="hidden" {...register("subject")} />
          <input
            type="hidden"
            value={`From ${NAME_THEME}`}
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

          <Button size="lg" type="submit" color="accent" className="w-full">
            {isSubmitting ? (
              <LoaderIcon className="size-5 mx-auto animate-spin" />
            ) : (
              "Send"
            )}
          </Button>
        </form>
      )}
      {isSubmitSuccessful && isSuccess && (
        <div className="flex items-center justify-center">
          <Snackbar title="Successful" text="Message successfully sent!">
            <Button
              size="md"
              color="accent"
              className="mt-4 self-start rounded"
              onClick={() => reset()}
            >
              Go back
            </Button>
          </Snackbar>
        </div>
      )}

      {isSubmitSuccessful && !isSuccess && (
        <div className="flex items-center justify-center">
          <Snackbar
            title="Oops, Something went wrong!"
            text={Message}
            isError={!isSuccess}
          >
            <Button
              size="md"
              color="accent"
              className="mt-4 self-start rounded-xl"
              onClick={() => reset()}
            >
              Try Again
            </Button>
          </Snackbar>
        </div>
      )}
    </>
  );
};
