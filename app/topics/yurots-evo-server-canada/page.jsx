import YurotsEvoServerCanadaKeywordPage, { generateMetadata } from './yurots-evo-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsEvoServerCanadaKeywordPage />;
}
