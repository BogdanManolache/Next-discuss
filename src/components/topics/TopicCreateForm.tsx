'use client';

import { useFormState } from 'react-dom';
import * as actions from '@/actions';
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react';
import FormButton from '../common/FormButton';

export default function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic, { errors: {} });

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex w-80 flex-col gap-4 p-4">
            <h3 className="text-lg">Create a Topic</h3>
            <Input
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              name="name"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join('. ')}
            />
            <Textarea
              label="Description"
              labelPlacement="outside"
              placeholder="Describe your topic"
              name="description"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join('. ')}
            />
            {formState.errors._form ? (
              <div className="rounded border border-red-400 bg-red-200 p-2 text-red-800">
                {formState.errors._form?.join('. ')}
              </div>
            ) : null}
            <FormButton>Save</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
