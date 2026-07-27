import ZaneraWorldKeywordPage, { generateMetadata } from './zanera-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZaneraWorldKeywordPage />;
}
