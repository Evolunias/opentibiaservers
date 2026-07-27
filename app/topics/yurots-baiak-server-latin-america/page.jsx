import YurotsBaiakServerLatinAmericaKeywordPage, { generateMetadata } from './yurots-baiak-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsBaiakServerLatinAmericaKeywordPage />;
}
