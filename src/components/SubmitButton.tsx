"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

type SubmitButtonProps = {
  className?: string;
  text: string;
  pendingText?: string;
};

export default function SubmitButton({
  className,
  text,
  pendingText,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button className={className} type="submit" disabled={pending}>
      {pending ? pendingText || `${text}ing...` : text}
    </Button>
  );
}
