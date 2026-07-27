import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvpe-server-canada');
}

export default function YurotsPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvpe-server-canada" />;
}
