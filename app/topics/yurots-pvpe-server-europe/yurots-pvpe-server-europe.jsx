import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvpe-server-europe');
}

export default function YurotsPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvpe-server-europe" />;
}
