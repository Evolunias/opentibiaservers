import XanteriaOtKeywordPage, { generateMetadata } from './xanteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaOtKeywordPage />;
}
