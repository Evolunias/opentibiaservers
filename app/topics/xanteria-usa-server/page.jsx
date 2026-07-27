import XanteriaUsaServerKeywordPage, { generateMetadata } from './xanteria-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaUsaServerKeywordPage />;
}
