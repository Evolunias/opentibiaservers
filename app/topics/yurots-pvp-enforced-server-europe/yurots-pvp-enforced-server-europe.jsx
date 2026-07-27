import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp-enforced-server-europe');
}

export default function YurotsPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp-enforced-server-europe" />;
}
