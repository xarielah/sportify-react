import metadata from "@/lib/metadata.json";
import { DoService } from "@/service/do/do-service";
import Button from "@/ui/components/button/button";
import AddActionForm from "@/ui/components/forms/add-action-form";
import FieldsWrap from "@/ui/components/forms/fields-wrap";
import Input from "@/ui/components/forms/input";
import Textarea from "@/ui/components/forms/textarea";
import FormPage from "@/ui/templates/form-page";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { ZodType } from "zod";
import * as z from "zod";

export default function AddWorkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WorkoutFormData>({ resolver: zodResolver(addWorkoutSchema) });

  const onSubmit = async (data: WorkoutFormData) => {
    console.log("submit");
    try {
      const result = await DoService.addWorkout(data);
      console.log("🚀 ~ onSubmit ~ result:", result);
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error);
    }
  };

  return (
    <FormPage
      title={metadata.pages.do["add-workout"].title}
      description={metadata.pages.do["add-workout"].description}
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
          <label htmlFor="comment">פירוט האימון בקצרה</label>
          <Textarea
            error={errors.comment}
            {...register("comment")}
            id="comment"
            rows={5}
            placeholder="פירוט האימונים בקצרה וסוג האימון (לדוגמה: ריצה, רכיבה על אופניים, וכו׳)"
          />
        </FieldsWrap>
        <Button type="submit" className="w-max mx-auto">
          הוספה
        </Button>
      </AddActionForm>
    </FormPage>
  );
}

export type WorkoutFormData = {
  date: string;
  length: string;
  comment: string;
};

const fieldErrors = metadata.pages.do["add-workout"].fieldErrors;

const addWorkoutSchema: ZodType<WorkoutFormData> = z
  .object({
    date: z.string().min(8, { message: fieldErrors.date.required }),
    length: z
      .string()
      .min(1, { message: fieldErrors.length.required })
      .max(3, { message: fieldErrors.length.invalid })
      .regex(/^\d+$/, { message: fieldErrors.length.invalid }),
    comment: z
      .string()
      .min(10, { message: fieldErrors.comment.required })
      .max(255, { message: fieldErrors.comment.invalid }),
  })
  .required();
