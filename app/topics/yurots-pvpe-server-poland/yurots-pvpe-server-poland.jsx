import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvpe-server-poland');
}

export default function YurotsPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvpe-server-poland" />;
}
