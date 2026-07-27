import XanteriaSwedenServerKeywordPage, { generateMetadata } from './xanteria-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaSwedenServerKeywordPage />;
}
