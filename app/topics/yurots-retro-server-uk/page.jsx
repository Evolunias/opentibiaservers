import YurotsRetroServerUkKeywordPage, { generateMetadata } from './yurots-retro-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsRetroServerUkKeywordPage />;
}
