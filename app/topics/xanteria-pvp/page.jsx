import XanteriaPvpKeywordPage, { generateMetadata } from './xanteria-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaPvpKeywordPage />;
}
