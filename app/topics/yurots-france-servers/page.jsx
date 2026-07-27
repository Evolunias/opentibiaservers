import YurotsFranceServersKeywordPage, { generateMetadata } from './yurots-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsFranceServersKeywordPage />;
}
