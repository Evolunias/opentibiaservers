import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp-enforced-server-germany');
}

export default function YurotsPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp-enforced-server-germany" />;
}
