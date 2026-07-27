import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-non-pvp-server-canada');
}

export default function XanteriaNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-non-pvp-server-canada" />;
}
