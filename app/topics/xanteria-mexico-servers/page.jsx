import XanteriaMexicoServersKeywordPage, { generateMetadata } from './xanteria-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaMexicoServersKeywordPage />;
}
