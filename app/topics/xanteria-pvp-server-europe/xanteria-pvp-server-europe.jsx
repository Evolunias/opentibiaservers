import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-server-europe');
}

export default function XanteriaPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-server-europe" />;
}
