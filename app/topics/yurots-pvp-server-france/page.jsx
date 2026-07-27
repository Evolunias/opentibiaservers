import YurotsPvpServerFranceKeywordPage, { generateMetadata } from './yurots-pvp-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsPvpServerFranceKeywordPage />;
}
