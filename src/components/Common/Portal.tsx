import { createPortal } from 'react-dom';

interface Props {
  children: React.ReactNode;
  selector?: string;
}

export default function Portal({ children, selector = '#modal' }: Props) {
  const rootElement = selector && document.querySelector(selector);

  return <>{rootElement ? createPortal(children, rootElement) : children}</>;
}
