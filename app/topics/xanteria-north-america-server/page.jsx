import XanteriaNorthAmericaServerKeywordPage, { generateMetadata } from './xanteria-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaNorthAmericaServerKeywordPage />;
}
