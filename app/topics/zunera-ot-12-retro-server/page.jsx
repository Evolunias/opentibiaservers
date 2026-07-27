import ZuneraOt12RetroServerKeywordPage, { generateMetadata } from './zunera-ot-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt12RetroServerKeywordPage />;
}
