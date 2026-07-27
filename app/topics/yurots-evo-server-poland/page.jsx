import YurotsEvoServerPolandKeywordPage, { generateMetadata } from './yurots-evo-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsEvoServerPolandKeywordPage />;
}
