import React, { useContext, useState } from "react";
import type { PageProps } from "gatsby";
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
  return (
    <>
      <FixedHeader>
        <h1 className="mx-auto text-base text-white">Rapportera problem</h1>
      </FixedHeader>
      <main className="mt-20 pt-safe-top">
        <div className="max-w-screen-sm p-8 mx-auto bg-white dark:bg-black-900">
          <Form method="post" netlify-honeypot="bot-field" data-netlify="true" name="reportBugs">
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
                     defaultValue="categoryBug"
                     id="categoryBug"
                     register={register("formCategory")}
                     />
                  </RadioItem>
                  <RadioItem text="Önskemål" htmlFor="categoryFeature">
                     <HiddenRadioInput
                     defaultValue="categoryFeature"
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
               <Label text="Meddelande" htmlFor="formMessage"/>
               <Textarea id="formMessage" placeholder="Beskriv gärna problemet/ditt önskemål" register={register("formSubject", { required: true })}/>
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
