import {ReactNode} from 'react';

export interface ConditionalWrapProps {
  children: JSX.Element;
  condition: boolean;
  wrap: (children: ReactNode) => JSX.Element;
}

export function ConditionalWrap(props: ConditionalWrapProps): JSX.Element {
  const {children, condition = false, wrap} = props;
  return condition ? wrap(children) : children;
}
