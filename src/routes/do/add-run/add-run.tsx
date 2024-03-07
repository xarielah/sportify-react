import metadata from "@/lib/metadata.json";
import Button from "@/ui/components/button/button";
import AddActionForm from "@/ui/components/forms/add-action-form";
import FieldsWrap from "@/ui/components/forms/fields-wrap";
import Input from "@/ui/components/forms/input";
import FormPage from "@/ui/templates/form-page";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { ZodType } from "zod";
import * as z from "zod";

export default function AddRun() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RunFormData>({ resolver: zodResolver(addRunSchema) });

  const onSubmit = async (data: RunFormData) => {
    console.log(data);
  };

  return (
    <FormPage
      title={metadata.pages.do["add-run"].title}
      description={metadata.pages.do["add-run"].description}
    >
      <AddActionForm onSubmit={handleSubmit(onSubmit)}>
        <FieldsWrap>
          <label htmlFor="date">תאריך האימון</label>
          <Input
            error={errors.date}
            {...register("date")}
            id="date"
            type="date"
            placeholder="תאריך האימון"
          />
        </FieldsWrap>
        <FieldsWrap>
          <label htmlFor="distance">מרחק</label>
          <Input
            error={errors.distance}
            {...register("distance")}
            id="distance"
            type="text"
            placeholder="מרחק (בקילומטרים)"
          />
        </FieldsWrap>
        <FieldsWrap>
          <label htmlFor="length">זמן</label>
          <Input
            error={errors.length}
            {...register("length")}
            id="length"
            type="text"
            placeholder="זמן (בדקות)"
          />
        </FieldsWrap>
        <FieldsWrap>
          <label htmlFor="steps">מספר צעדים</label>
          <Input
            error={errors.steps}
            {...register("steps")}
            id="steps"
            type="text"
            placeholder="מספר צעדים"
          />
        </FieldsWrap>
        <Button className="w-max mx-auto">הוספה</Button>
      </AddActionForm>
    </FormPage>
  );
}

export type RunFormData = {
  date: string;
  distance: string;
  length: string;
  steps: string;
};

const fieldErrors = metadata.pages.do["add-run"].fieldErrors;

const addRunSchema: ZodType<RunFormData> = z
  .object({
    date: z.string().min(8, { message: fieldErrors.date.required }),
    distance: z
      .string()
      .min(1, { message: fieldErrors.date.required })
      .max(4, { message: fieldErrors.distance.invalid })
      .regex(/^\d+$/, { message: fieldErrors.distance.invalid }),
    length: z
      .string()
      .min(1, { message: fieldErrors.length.required })
      .max(3, { message: fieldErrors.length.invalid })
      .regex(/^\d+$/, { message: fieldErrors.length.invalid }),
    steps: z
      .string()
      .min(1, { message: fieldErrors.steps.required })
      .max(5, { message: fieldErrors.steps.invalid })
      .regex(/^\d+$/, { message: fieldErrors.steps.invalid }),
  })
  .required();
