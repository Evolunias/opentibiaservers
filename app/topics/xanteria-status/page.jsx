import XanteriaStatusKeywordPage, { generateMetadata } from './xanteria-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaStatusKeywordPage />;
}
