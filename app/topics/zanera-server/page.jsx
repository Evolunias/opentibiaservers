import ZaneraServerKeywordPage, { generateMetadata } from './zanera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZaneraServerKeywordPage />;
}
