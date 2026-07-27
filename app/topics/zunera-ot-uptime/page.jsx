import ZuneraOtUptimeKeywordPage, { generateMetadata } from './zunera-ot-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtUptimeKeywordPage />;
}
