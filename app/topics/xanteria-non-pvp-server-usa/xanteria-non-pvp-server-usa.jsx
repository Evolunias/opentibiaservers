import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-non-pvp-server-usa');
}

export default function XanteriaNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-non-pvp-server-usa" />;
}
