import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvpe-server-brazil');
}

export default function YurotsPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvpe-server-brazil" />;
}
