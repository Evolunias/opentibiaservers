import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-server-canada');
}

export default function XanteriaPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-server-canada" />;
}
