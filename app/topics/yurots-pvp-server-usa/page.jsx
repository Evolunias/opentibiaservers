import YurotsPvpServerUsaKeywordPage, { generateMetadata } from './yurots-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsPvpServerUsaKeywordPage />;
}
