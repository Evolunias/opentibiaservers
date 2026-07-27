import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-uptime');
}

export default function ZezeniaOnlineUptimeKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-uptime" />;
}
