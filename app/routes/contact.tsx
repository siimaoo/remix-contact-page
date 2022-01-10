import { ActionFunction, useActionData } from "remix";
import { db } from "~/config";
import { Alert } from "~/modules/base/components";
import { ContactForm } from "~/modules/contact/components";

export const action: ActionFunction = async ({ request }) => {
  const { name, email, subject, message } = Object.fromEntries(
    await request.formData()
  ) as Record<string, string>;

  const connection = await db();
  const contactRepository = connection.getRepository("Contact");

  const contact = await contactRepository.save({
    name, email, subject, message
  });

  return { name: contact.name };
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
