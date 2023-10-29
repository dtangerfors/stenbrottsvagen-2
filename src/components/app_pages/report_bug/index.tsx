import React, { useContext, useState } from "react";
import { PageProps, navigate } from "gatsby";
import { useForm } from "react-hook-form";
import FixedHeader from "../../FixedHeader";
import { AuthContext } from "../../../auth/AuthProvider";
import {
  Form,
  FormPart,
  Label,
  Input,
  Select,
  SubmitButton,
  CheckboxWrapper,
  RadioItem,
  HiddenRadioInput,
  FormError,
  Textarea,
} from "../../booking_form/form_items";

type FormData = {
  formName: string;
  formCategory: string;
  formSubject: string;
  formMessage: string;
};

const AppReportBugPage: React.FC<PageProps> = ({}) => {
  //   const user = useContext(AuthContext).currentUser;
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>();

  const encode = (data: any) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const onSubmit = (data: any, e: any) => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({"form-name": "reportBugs", ...data})
    })
    .then(() => navigate("/app/tack"))
    .catch((error) => alert(error));
  }

  return (
    <>
      <FixedHeader>
        <h1 className="mx-auto text-base text-white">Rapportera problem</h1>
      </FixedHeader>
      <main className="mt-20 pt-safe-top">
        <div className="max-w-screen-sm p-8 mx-auto bg-white dark:bg-black-900">
          <Form method="post" name="reportBugs" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="reportBugs" />
            <FormPart>
              <Label text="Namn" htmlFor="formName" />
              <Input
                id="formName"
                type="text"
                placeholder="Namn"
                register={register("formName", { required: true })}
              />
            </FormPart>
            <FormPart>
              <Label htmlFor="formCategory" text="Kategori" />
              <CheckboxWrapper>
                <RadioItem text="Bugg" htmlFor="categoryBug">
                  <HiddenRadioInput
                    defaultValue="Bugg"
                    id="categoryBug"
                    register={register("formCategory")}
                  />
                </RadioItem>
                <RadioItem text="Önskemål" htmlFor="categoryFeature">
                  <HiddenRadioInput
                    defaultValue="Önskemål"
                    id="categoryFeature"
                    register={register("formCategory")}
                  />
                </RadioItem>
              </CheckboxWrapper>
            </FormPart>
            <FormPart>
              <Label text="Ämne" htmlFor="formSubject" />
              <Input
                id="formSubject"
                type="text"
                placeholder="Ämne"
                register={register("formSubject", { required: true })}
              />
            </FormPart>
            <FormPart>
              <Label text="Meddelande" htmlFor="formMessage" />
              <Textarea
                id="formMessage"
                placeholder="Beskriv gärna problemet/ditt önskemål"
                register={register("formMessage", { required: true })}
              />
            </FormPart>
            <FormPart>
              <SubmitButton name="Submit" value="Skicka rapport" />
            </FormPart>
          </Form>
        </div>
      </main>
    </>
  );
};

export default AppReportBugPage;
