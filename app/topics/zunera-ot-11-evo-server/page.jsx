import ZuneraOt11EvoServerKeywordPage, { generateMetadata } from './zunera-ot-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt11EvoServerKeywordPage />;
}
