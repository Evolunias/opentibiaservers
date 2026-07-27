import YurotsEvoServerMexicoKeywordPage, { generateMetadata } from './yurots-evo-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsEvoServerMexicoKeywordPage />;
}
