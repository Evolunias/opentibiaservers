import XanteriaUptimeKeywordPage, { generateMetadata } from './xanteria-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaUptimeKeywordPage />;
}
