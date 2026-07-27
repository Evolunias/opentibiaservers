import XanteriaBrazilServerKeywordPage, { generateMetadata } from './xanteria-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaBrazilServerKeywordPage />;
}
