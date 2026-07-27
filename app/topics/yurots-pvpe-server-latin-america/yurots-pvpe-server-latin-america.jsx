import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvpe-server-latin-america');
}

export default function YurotsPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvpe-server-latin-america" />;
}
