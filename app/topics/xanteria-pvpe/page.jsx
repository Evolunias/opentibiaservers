import XanteriaPvpeKeywordPage, { generateMetadata } from './xanteria-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaPvpeKeywordPage />;
}
