import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-uptime');
}

export default function ZnoteAacUptimeKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-uptime" />;
}
