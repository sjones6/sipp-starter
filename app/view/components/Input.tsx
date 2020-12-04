import { h } from 'sipp';
import { CanDisable, HtmlAttrs } from './interface';

interface TextInputProps extends CanDisable, HtmlAttrs {
  label: string;
  name: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  value: string;
  error?: string;
  required?: boolean;
}

const baseClasses = 'bg-white focus:outline-none focus:shadow-outline border rounded-lg py-2 px-4 block w-full appearance-none leading-normal';
const standardClasses = ['border-gray-300', baseClasses].join(' ');
const errorClasses = ['border-red-300 text-red-500', baseClasses].join(' ');;

export const Input = (props: TextInputProps) => {

  return <div class="my-2">
    <label>
      {props.label}
      {props.required ? <span class="text-red-500">*</span> : null}
      <input
        class={props.error ? errorClasses : standardClasses}
        disabled={props.disabled}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type || 'string'}
        value={props.value}
      >
      </input>
      {props.error ? <div class="text-red-500">
        {props.error}
      </div> : null}
    </label>
  </div>
}


interface TextAreaProps extends TextInputProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  value: string;
  rows?: number;
  cols?: number;
  error?: string;
  required?: boolean;
}

export const TextArea = (props: TextAreaProps) => {

  return <div class="my-2">
    <label>
      {props.label}
      {props.required ? <span class="text-red-500">*</span> : null}
      <textarea
        class={props.error ? errorClasses : standardClasses}
        disabled={props.disabled}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type || 'string'}
        value={props.value}
        rows={props.rows || 3}
        cols={props.cols || 50}
      >
      </textarea>
      {props.error ? <div class="text-red-500">
        {props.error}
      </div> : null}
    </label>
  </div>
}