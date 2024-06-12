import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { legalInformationSchema } from "../../validations/UserInformationValidation";
import Button from "../Button";
import FormInput from "../FormInput";

interface FormProps {
  organizationName: string;
  economicCode: string;
  nationalId: string;
  registrationId: string;
  state: string;
  city: string;
  phoneNumber: string;
}

const UpdateLegalInformation = () => {
  const initialValues: FormProps = {
    organizationName: "",
    economicCode: "",
    nationalId: "",
    registrationId: "",
    state: "",
    city: "",
    phoneNumber: "",
  };

  const router = useRouter();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={legalInformationSchema}
      onSubmit={(values: FormProps) => router.push("/dashboard/profile")}
    >
      <Form className="update-form__container">
        <FormInput
          type="text"
          text="نام سازمان"
          name="organizationName"
          placeholder="نام سازمان خود را وارد کنید."
          required
        />
        <FormInput
          type="text"
          text="کد اقتصادی"
          name="economicCode"
          placeholder="کد اقتصادی سازمان خود را وارد کنید."
          required
        />
        <FormInput type="text" text="شناسه ملی" name="nationalId" required />
        <FormInput
          type="text"
          text="شناسه ثبت"
          name="registrationId"
          placeholder="شناسه ثبت سازمان خود را وارد کنید."
          required
        />
        <FormInput
          type="text"
          text="استان محل دفتر مرکزی"
          name="state"
          required
        />
        <FormInput type="text" text="شهر محل دفتر مرکزی" name="city" required />
        <FormInput
          type="text"
          text="شماره تلفن ثابت"
          name="phoneNumber"
          placeholder="شماره تلفن ثابت سازمان خود را وارد کنید.."
          required
        />
        <div></div>
        <div>
          <Button text="ذخیره تغییرات" className="h-10 w-28" />
        </div>
      </Form>
    </Formik>
  );
};

export default UpdateLegalInformation;
