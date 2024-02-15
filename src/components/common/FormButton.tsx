'use client';

import { Button } from '@nextui-org/react';
import { useFormStatus } from 'react-dom';

interface FormButtonProps {
  children: React.ReactNode;
}

export default function FormButton({ children }: FormButtonProps) {
  const status = useFormStatus();
  // console.log(status)

  return (
    <Button type="submit" isLoading={status.pending}>
      {children}
    </Button>
  );
}
