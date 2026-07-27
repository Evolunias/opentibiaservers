import ZuneraOt11RetroServerKeywordPage, { generateMetadata } from './zunera-ot-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt11RetroServerKeywordPage />;
}
