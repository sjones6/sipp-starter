import { h, RequestContext } from 'sipp';
import { App } from '@app/view/App';

export interface HomeProps {
  title: string
  header: string
}

export const home = (props: HomeProps, ctx: RequestContext): string => <App title={props.title} ctx={ctx}>
  <h1 class='text-2xl text-gray-800'>{props.header}</h1>
</App>