import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvpe-server-france');
}

export default function XanteriaPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvpe-server-france" />;
}
