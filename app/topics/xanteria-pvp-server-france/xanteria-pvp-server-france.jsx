import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-server-france');
}

export default function XanteriaPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-server-france" />;
}
