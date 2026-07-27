import YurotsPvpServerSwedenKeywordPage, { generateMetadata } from './yurots-pvp-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsPvpServerSwedenKeywordPage />;
}
