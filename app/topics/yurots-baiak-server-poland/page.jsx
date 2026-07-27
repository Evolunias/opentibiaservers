import YurotsBaiakServerPolandKeywordPage, { generateMetadata } from './yurots-baiak-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsBaiakServerPolandKeywordPage />;
}
