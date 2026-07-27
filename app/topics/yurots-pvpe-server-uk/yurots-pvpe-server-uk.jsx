import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvpe-server-uk');
}

export default function YurotsPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvpe-server-uk" />;
}
