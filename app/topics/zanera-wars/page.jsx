import ZaneraWarsKeywordPage, { generateMetadata } from './zanera-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZaneraWarsKeywordPage />;
}
