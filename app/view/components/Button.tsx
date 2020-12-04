import { h } from 'sipp';
import { HtmlAttrs } from './interface';

interface ButtonProps extends HtmlAttrs {
  label: string;
  type?: 'submit' | undefined;
}

const primaryClasses = 'bg-blue-500 text-white rounded-lg px-4 py-2';

export const Button = (props: ButtonProps) => {
  return (
    <button
      class={[primaryClasses, props.class || ''].join(' ')}
      type={props.type}
    >
      {props.label}
    </button>
  );
};
