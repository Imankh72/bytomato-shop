import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { personalInformationSchema } from "../../validations/UserInformationValidation";
import Button from "../Button";
import FormInput from "../FormInput";
import RadioButton from "../RadioButton";
import SelectInput from "../SelectInput";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  nationalCode: string;
  phoneNumber: string;
  isForeign: boolean;
  birthday: {
    day: string;
    month: string;
    year: string;
  };
  creditCardNumber: string;
  accountNumber: string;
  gender: "male" | "female";
}

const UpdatePersonalInformation = () => {
  const initialValues: FormValues = {
    firstName: "ایمان",
    lastName: "خورشیدی",
    email: "iman@gmail.com",
    phoneNumber: "09361234567",
    isForeign: false,
    nationalCode: "123456789",

    birthday: {
      day: "12",
      month: "7",
      year: "1372",
    },
    creditCardNumber: "",
    accountNumber: "",
    gender: "male",
  };

  const router = useRouter();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={personalInformationSchema}
      onSubmit={(values: FormValues) => router.push("/dashboard/profile")}
    >
      <Form className="update-form__container">
        <FormInput type="text" text="نام" name="firstName" required />
        <FormInput type="text" text="نام خانوادگی" name="lastName" required />
        <div className="flex items-center gap-x-10">
          <div className="flex flex-col gap-y-3">
            <label className="text-[13px] text-secondary">
              <span className="text-red ml-1">*</span>
              جنسیت:
            </label>
            <div className="flex items-center gap-x-10">
              <RadioButton name="gender" text="مرد" value="male" />
              <RadioButton name="gender" text="زن" value="female" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-[13px] text-secondary">تاریخ تولد:</label>
          <div className="flex items-center gap-x-10">
            <SelectInput name="birthday.day" data={dayOptions} />
            <SelectInput name="birthday.month" data={monthOptions} />
            <SelectInput name="birthday.year" data={yearOptions} />
          </div>
        </div>
        <FormInput type="email" text="ایمیل" name="email" />
        <FormInput type="number" text="شماره موبایل" name="phoneNumber" />
        <div>
          <label className="checkbox-container">
            <Field className="checkbox" type="checkbox" name="isForeign" />
            <span className="checkmark right-0 -top-[2px]"></span>
          </label>
          <span className="mr-8 text-[13px] text-secondary">
            اتباع خارجی هستم
          </span>
        </div>
        <FormInput type="number" text="کد ملی" name="nationalCode" required />
        <FormInput type="number" text="شماره کارت" name="creditCardNumber" />
        <FormInput type="number" text="شماره شبا" name="accountNumber" />
        <div>
          <Button text="ذخیره تغییرات" className="h-10 w-28" />
        </div>
      </Form>
    </Formik>
  );
};

export default UpdatePersonalInformation;

const dayOptions = [
  { id: 1, label: "روز", value: "" },
  { id: 2, label: "1", value: "1" },
  { id: 3, label: "2", value: "2" },
  { id: 4, label: "3", value: "3" },
  { id: 5, label: "4", value: "4" },
  { id: 6, label: "5", value: "5" },
  { id: 7, label: "6", value: "6" },
  { id: 8, label: "7", value: "7" },
  { id: 9, label: "8", value: "8" },
  { id: 10, label: "9", value: "9" },
  { id: 11, label: "10", value: "10" },
  { id: 12, label: "11", value: "11" },
  { id: 13, label: "12", value: "12" },
  { id: 14, label: "13", value: "13" },
  { id: 15, label: "14", value: "14" },
  { id: 16, label: "15", value: "15" },
  { id: 17, label: "16", value: "16" },
  { id: 18, label: "17", value: "17" },
  { id: 19, label: "18", value: "18" },
  { id: 20, label: "19", value: "19" },
  { id: 21, label: "20", value: "20" },
  { id: 22, label: "21", value: "21" },
  { id: 23, label: "22", value: "22" },
  { id: 24, label: "23", value: "23" },
  { id: 25, label: "24", value: "24" },
  { id: 26, label: "25", value: "25" },
  { id: 27, label: "26", value: "26" },
  { id: 28, label: "27", value: "27" },
  { id: 29, label: "28", value: "28" },
  { id: 30, label: "29", value: "29" },
  { id: 31, label: "30", value: "30" },
  { id: 32, label: "31", value: "31" },
];

const monthOptions = [
  { id: 1, label: "ماه", value: "" },
  { id: 2, label: "فروردین", value: "1" },
  { id: 3, label: "اردیبهشت", value: "2" },
  { id: 4, label: "خرداد", value: "3" },
  { id: 5, label: "تیر", value: "4" },
  { id: 6, label: "مرداد", value: "5" },
  { id: 7, label: "شهریور", value: "6" },
  { id: 8, label: "مهر", value: "7" },
  { id: 9, label: "آبان", value: "8" },
  { id: 10, label: "آذر", value: "9" },
  { id: 11, label: "دی", value: "10" },
  { id: 12, label: "بهمن", value: "11" },
  { id: 13, label: "اسفند", value: "12" },
];

const yearOptions = [
  { id: 1, label: "سال", value: "   " },
  { id: 2, label: "1390", value: "1390" },
  { id: 3, label: "1389", value: "1389" },
  { id: 4, label: "1388", value: "1388" },
  { id: 5, label: "1387", value: "1387" },
  { id: 6, label: "1386", value: "1386" },
  { id: 7, label: "1385", value: "1385" },
  { id: 8, label: "1384", value: "1384" },
  { id: 9, label: "1383", value: "1383" },
  { id: 10, label: "1382", value: "1382" },
  { id: 11, label: "1381", value: "1381" },
  { id: 12, label: "1380", value: "1380" },
  { id: 13, label: "1379", value: "1379" },
  { id: 14, label: "1378", value: "1378" },
  { id: 15, label: "1377", value: "1377" },
  { id: 16, label: "1376", value: "1376" },
  { id: 17, label: "1375", value: "1357" },
  { id: 18, label: "1374", value: "1374" },
  { id: 19, label: "1373", value: "1373" },
  { id: 20, label: "1372", value: "1372" },
  { id: 21, label: "1371", value: "1371" },
  { id: 22, label: "1370", value: "1370" },
  { id: 23, label: "1369", value: "1369" },
  { id: 24, label: "1368", value: "1368" },
  { id: 25, label: "1367", value: "1367" },
  { id: 26, label: "1366", value: "1366" },
  { id: 27, label: "1365", value: "1365" },
  { id: 28, label: "1364", value: "1364" },
  { id: 29, label: "1363", value: "1363" },
  { id: 30, label: "1362", value: "1362" },
  { id: 31, label: "1361", value: "1361" },
  { id: 32, label: "1360", value: "1360" },
  { id: 33, label: "1359", value: "1359" },
  { id: 34, label: "1358", value: "1358" },
  { id: 35, label: "1357", value: "1357" },
  { id: 36, label: "1356", value: "1356" },
  { id: 37, label: "1355", value: "1355" },
  { id: 38, label: "1354", value: "1354" },
  { id: 39, label: "1353", value: "1353" },
  { id: 40, label: "1352", value: "1352" },
  { id: 41, label: "1351", value: "1351" },
  { id: 42, label: "1350", value: "1350" },
  { id: 43, label: "1349", value: "1349" },
  { id: 44, label: "1348", value: "1348" },
  { id: 45, label: "1347", value: "1347" },
  { id: 46, label: "1346", value: "1346" },
  { id: 47, label: "1345", value: "1345" },
  { id: 48, label: "1344", value: "1344" },
  { id: 49, label: "1343", value: "1343" },
  { id: 50, label: "1342", value: "1342" },
  { id: 51, label: "1341", value: "1341" },
  { id: 52, label: "1340", value: "1340" },
  { id: 53, label: "1339", value: "1339" },
  { id: 54, label: "1338", value: "1338" },
  { id: 55, label: "1337", value: "1337" },
  { id: 56, label: "1336", value: "1336" },
  { id: 57, label: "1335", value: "1335" },
  { id: 58, label: "1334", value: "1334" },
  { id: 59, label: "1333", value: "1333" },
  { id: 60, label: "1332", value: "1332" },
  { id: 61, label: "1331", value: "1331" },
  { id: 62, label: "1330", value: "1330" },
  { id: 63, label: "1329", value: "1329" },
  { id: 64, label: "1328", value: "1328" },
  { id: 65, label: "1327", value: "1327" },
  { id: 66, label: "1326", value: "1326" },
  { id: 67, label: "1325", value: "1325" },
];
