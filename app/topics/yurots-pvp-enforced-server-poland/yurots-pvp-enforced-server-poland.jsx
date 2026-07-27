import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp-enforced-server-poland');
}

export default function YurotsPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp-enforced-server-poland" />;
}
