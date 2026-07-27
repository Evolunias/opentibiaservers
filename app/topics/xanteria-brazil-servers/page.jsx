import XanteriaBrazilServersKeywordPage, { generateMetadata } from './xanteria-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaBrazilServersKeywordPage />;
}
