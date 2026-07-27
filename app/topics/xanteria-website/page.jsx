import XanteriaWebsiteKeywordPage, { generateMetadata } from './xanteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaWebsiteKeywordPage />;
}
