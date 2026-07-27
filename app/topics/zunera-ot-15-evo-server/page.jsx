import ZuneraOt15EvoServerKeywordPage, { generateMetadata } from './zunera-ot-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt15EvoServerKeywordPage />;
}
