import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-non-pvp-server-europe');
}

export default function XanteriaNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="xanteria-non-pvp-server-europe" />;
}
