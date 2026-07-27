import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvpe-server-mexico');
}

export default function YurotsPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvpe-server-mexico" />;
}
