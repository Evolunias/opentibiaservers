import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvpe-server-north-america');
}

export default function YurotsPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvpe-server-north-america" />;
}
