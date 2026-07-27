import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-enforced-server-europe');
}

export default function XanteriaPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-enforced-server-europe" />;
}
