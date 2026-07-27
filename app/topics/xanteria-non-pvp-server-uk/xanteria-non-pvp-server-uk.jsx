import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-non-pvp-server-uk');
}

export default function XanteriaNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="xanteria-non-pvp-server-uk" />;
}
