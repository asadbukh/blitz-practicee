import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { LabeledSelectField } from "app/core/components/LabeledSelectField"
import { z } from "zod"
export { FORM_ERROR } from "app/core/components/Form"

export function CorgiForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="name" label="Name" placeholder="Name" />
      <LabeledTextField name="image" label="image" placeholder="image" />
      <LabeledSelectField name="toyId" label="toys" />
    </Form>
  )
}
