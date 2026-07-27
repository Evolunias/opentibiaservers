import XanteriaRealMapKeywordPage, { generateMetadata } from './xanteria-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaRealMapKeywordPage />;
}
