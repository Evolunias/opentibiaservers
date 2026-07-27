import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvpe-server-usa');
}

export default function YurotsPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvpe-server-usa" />;
}
