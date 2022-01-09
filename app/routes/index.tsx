import { Button, Input } from "~/modules/base/components";

export default function Index() {
  return (
    <div className="flex w-full h-screen items-center justify-center flex-col gap-4">
      <h1>Hello, World!</h1>
      <Input label="With label" />
      <Input placeholder="Without label" />
      <Input error="Error without label" />
      <Input label="Error" error="with label" />
      <Button className="bg-red-500">Click</Button>
    </div>
  );
}
