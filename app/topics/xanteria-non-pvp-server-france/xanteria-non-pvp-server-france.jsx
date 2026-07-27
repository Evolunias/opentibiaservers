import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-non-pvp-server-france');
}

export default function XanteriaNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="xanteria-non-pvp-server-france" />;
}
