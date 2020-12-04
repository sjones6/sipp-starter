import { h, Session } from 'sipp';

type AlertProps = {
  title: string;
  message: string;
  color: 'green' | 'red' | 'blue';
};

// TODO: the integration with alpinejs is a bit awkward due to JSX not supporting the properties for events
// this is a work around but need something better
const closeButton = `
<button class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none" @click="open = false">
    <span>×</span>
  </button>`;

const Alert = ({ title, message, color }: AlertProps) => (
  <div
    class={`bg-${color}-50 border-l-4 border-${color}-500 text-${color}-800 p-4 mb-2 relative`}
    role="alert"
    x-data="{ open: true }"
    x-show="open"
  >
    <p class="font-bold">{title}</p>
    <p>{message}</p>
    {closeButton}
  </div>
);

export const Alerts = ({ session }: { session: Session }) => {
  const success = session.getFlash('success');
  const error = session.getFlash('error');
  const info = session.getFlash('info');
  return (
    <div class="global-alerts">
      {success &&
        success.map((msg) => (
          <Alert title="Success!" message={msg} color="green" />
        ))}
      {error &&
        error.map((msg) => <Alert title="Error!" message={msg} color="red" />)}
      {info &&
        info.map((msg) => <Alert title="Info!" message={msg} color="blue" />)}
    </div>
  );
};
