import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-enforced-server-uk');
}

export default function XanteriaPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-enforced-server-uk" />;
}
