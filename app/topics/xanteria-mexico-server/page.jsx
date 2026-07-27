import XanteriaMexicoServerKeywordPage, { generateMetadata } from './xanteria-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaMexicoServerKeywordPage />;
}
