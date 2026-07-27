import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-enforced-server-poland');
}

export default function XanteriaPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-enforced-server-poland" />;
}
