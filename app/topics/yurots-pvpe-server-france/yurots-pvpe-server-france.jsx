import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvpe-server-france');
}

export default function YurotsPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvpe-server-france" />;
}
