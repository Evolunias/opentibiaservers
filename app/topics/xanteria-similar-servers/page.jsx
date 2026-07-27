import XanteriaSimilarServersKeywordPage, { generateMetadata } from './xanteria-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaSimilarServersKeywordPage />;
}
