import YurotsUptimeKeywordPage, { generateMetadata } from './yurots-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsUptimeKeywordPage />;
}
