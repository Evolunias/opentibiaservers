import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-uptime');
}

export default function ZuneraOtUptimeKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-uptime" />;
}
