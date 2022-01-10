import { ActionFunction, useActionData } from "remix";
import { Alert } from "~/modules/base/components";
import { ContactForm } from "~/modules/contact/components";

export const action: ActionFunction = async ({ request }) => {
  const { name } = Object.fromEntries(
    await request.formData()
  ) as Record<string, string>;

  return { name };
};

export default function () {
  const { name } = useActionData() || {};

  return (
    <div className="flex w-full h-screen items-center justify-center flex-col gap-4">
      {!!name && <Alert message={`${name}, your message has been sent.`} />}
      <ContactForm />
    </div>
  );
}
