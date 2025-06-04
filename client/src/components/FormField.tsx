import { FC } from 'react';
import { Props } from '@shared/types/types';
import Container from './base/Container';
import Info from './Info';

interface FormFieldProps extends Props<'input'> {
  label: string;
  error: string;
}

const FormField: FC<FormFieldProps> = ({ label, error, ...props }) => {
  return (
    <Container className='w-full items-start' variants={{ flow: 'col' }}>
      <label className='flex flex-col w-full'>
        {label}
        <input {...props} />
      </label>
      <Info type='error' text={error} />
    </Container>
  );
};

export default FormField;
