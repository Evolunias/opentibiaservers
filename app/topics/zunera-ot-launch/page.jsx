import ZuneraOtLaunchKeywordPage, { generateMetadata } from './zunera-ot-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtLaunchKeywordPage />;
}
