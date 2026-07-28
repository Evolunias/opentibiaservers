import Valdareth80CustomWarServerPage, { generateMetadata } from './valdareth-8-0-custom-war-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Valdareth80CustomWarServerPage />;
}
