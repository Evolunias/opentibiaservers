import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-uptime');
}

export default function XanteriaUptimeKeywordPage() {
  return <StaticKeywordPage slug="xanteria-uptime" />;
}
