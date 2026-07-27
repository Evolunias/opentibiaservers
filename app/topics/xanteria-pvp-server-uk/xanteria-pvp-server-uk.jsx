import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-server-uk');
}

export default function XanteriaPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-server-uk" />;
}
