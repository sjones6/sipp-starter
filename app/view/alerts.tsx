import { h, RequestSession } from 'sipp';

export const Alerts = ({ session }: { session: RequestSession }) => {
  const success = session.getFlash('success');
  const error = session.getFlash('error');
  const info = session.getFlash('info');
  return <div class="global-alerts">
    {success && success.map((msg) => <div class="bg-green-50 border-l-4 border-green-500 text-green-800 p-4 mb-2" role="alert">
      <p class="font-bold">Success!</p>
      <p>{msg}</p>
    </div>)}
    {error && error.map((msg) => <div class="bg-red-50 border-l-4 border-red-500 text-red-800 p-4 mb-2" role="alert">
      <p class="font-bold">Error!</p>
      <p>{msg}</p>
    </div>)}
    {info && info.map((msg) => <div class="bg-blue-50 border-l-4 border-blue text-blue-800 p-4 mb-2" role="alert">
      <p class="font-bold">Info:</p>
      <p>{msg}</p>
    </div>)}
  </div>
}
