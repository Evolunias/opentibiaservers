import ZuneraOtRetroServerUsaKeywordPage, { generateMetadata } from './zunera-ot-retro-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtRetroServerUsaKeywordPage />;
}
