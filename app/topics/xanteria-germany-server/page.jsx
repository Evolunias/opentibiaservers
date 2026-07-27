import XanteriaGermanyServerKeywordPage, { generateMetadata } from './xanteria-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaGermanyServerKeywordPage />;
}
