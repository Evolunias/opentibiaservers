import ZuneraOtLauncherKeywordPage, { generateMetadata } from './zunera-ot-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtLauncherKeywordPage />;
}
