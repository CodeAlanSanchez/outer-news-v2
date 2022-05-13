import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Error: React.FC<Props> = ({ children }: Props) => {
  return <h1 className="error">{children}</h1>;
};

export default Error;
