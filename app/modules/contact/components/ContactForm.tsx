import { Form, useTransition } from "remix";
import { Button, Input, TextArea } from "~/modules/base/components";

const ContactForm = () => {
  const { submission } = useTransition();

  return (
    <Form method="post" className="w-11/12 max-w-md">
      <Input name="name" label="Name" />
      <Input name="email" label="Email" />
      <Input name="subject" label="Subject" />
      <TextArea name="message" label="Message" rows={10} />
      <Button loading={!!submission}>Submit</Button>
    </Form>
  );
};

export default ContactForm;
