import YurotsPvpeKeywordPage, { generateMetadata } from './yurots-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsPvpeKeywordPage />;
}
