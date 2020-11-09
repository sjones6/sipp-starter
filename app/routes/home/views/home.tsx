import { h } from '@sjones6/ts-mvc';
import { App } from '@app/view/App';

export interface HomeProps {
  title: string
  header: string
}

export const home = (props: HomeProps): string => <App title={props.title}>
  <h1>{props.header}</h1>
</App>