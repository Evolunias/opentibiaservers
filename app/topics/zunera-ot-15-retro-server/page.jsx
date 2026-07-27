import ZuneraOt15RetroServerKeywordPage, { generateMetadata } from './zunera-ot-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt15RetroServerKeywordPage />;
}
