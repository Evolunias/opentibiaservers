import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-uptime');
}

export default function YurotsUptimeKeywordPage() {
  return <StaticKeywordPage slug="yurots-uptime" />;
}
