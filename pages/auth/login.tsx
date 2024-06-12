import { FC, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { BsPhone } from "react-icons/bs";
import { CloseIcon } from "../../components/svgs/CloseIcon";
import Button from "../../components/Button";
import { loginValidationSchema } from "../../validations/UserInformationValidation";

interface FormProp {
  phoneNumber: string;
}

const Login: FC = () => {
  const router = useRouter();
  const ref = useRef(null);

  useEffect(() => {
    ref?.current?.focus();
  }, []);

  return (
    <>
      <Head>
        <title>ورود | فروشگاه</title>
      </Head>
      <main>
        <div className="bg-neutral-100 flex justify-center items-center w-[100vw] h-[100vh] px-4">
          <div className="bg-white rounded-tr-3xl rounded-bl-3xl rounded-tl-[50px] rounded-br-[50px] border border-neutral-300 shadow-2xl px-5 py-8 w-full lg:rounded-tl-[110px] lg:rounded-br-[110px] lg:w-[35%] lg:py-12 lg:px-14">
            <h1 className="text-blue font-bold text-[26px] text-center mb-20 lg:text-[36px] lg:mb-32">
              فروشگاه
            </h1>
            <div className="flex flex-col gap-y-2 mb-3">
              <h3 className="text-[20px] font-bold">ورود به حساب کاربری</h3>
              <p className="text-[13px] text-grayDark font-light">
                شماره موبایل خود را وارد کنید.
              </p>
            </div>
            <Formik
              initialValues={{
                phoneNumber: "",
              }}
              validationSchema={loginValidationSchema}
              onSubmit={(values: FormProp) => router.push("/")}
            >
              {({ setFieldValue }) => (
                <Form>
                  <div className="h-[100px]">
                    <div className="relative flex items-center h-12 px-3 rounded-md border border-[#d9d9d9] w-full mb-1">
                      <div>
                        <BsPhone className="fill-neutral-500 w-6 h-6" />
                      </div>
                      <Field
                        innerRef={ref}
                        className="w-full text-[14px] text-grayDark mr-3 ml-6 border-none placeholder:text-neutral-300 focus:outline-none"
                        type="number"
                        name="phoneNumber"
                        placeholder="شماره موبایل خود را وارد کنید."
                      />
                      <div
                        className="bg-neutral-100 p-1 rounded-full cursor-pointer"
                        onClick={() => {
                          setFieldValue("phoneNumber", "");
                        }}
                      >
                        <CloseIcon className="w-4 h-4 stroke-secondary" />
                      </div>
                    </div>
                    <ErrorMessage
                      name="phoneNumber"
                      render={(message) => (
                        <div className="text-[14px] text-red">{message}</div>
                      )}
                    />
                  </div>
                  <Button text="ادامه" className="w-full mb-2" />
                  <div className="text-[12px] text-secondary">
                    <Link href="/" className="text-blue">
                      شرایط و قوانین
                    </Link>{" "}
                    سایت تیمچه و{" "}
                    <Link href="/" className="text-blue">
                      حریم خصوصی
                    </Link>{" "}
                    را می پذیرم.
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
