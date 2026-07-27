import XanteriaBossesKeywordPage, { generateMetadata } from './xanteria-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaBossesKeywordPage />;
}
