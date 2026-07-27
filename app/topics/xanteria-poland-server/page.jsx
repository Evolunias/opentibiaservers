import XanteriaPolandServerKeywordPage, { generateMetadata } from './xanteria-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaPolandServerKeywordPage />;
}
