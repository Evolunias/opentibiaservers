import ValoriaPage, { generateMetadata } from './valoria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ValoriaPage />;
}
