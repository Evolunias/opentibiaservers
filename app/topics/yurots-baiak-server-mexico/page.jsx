import YurotsBaiakServerMexicoKeywordPage, { generateMetadata } from './yurots-baiak-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsBaiakServerMexicoKeywordPage />;
}
