import YurotsFranceServerKeywordPage, { generateMetadata } from './yurots-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsFranceServerKeywordPage />;
}
