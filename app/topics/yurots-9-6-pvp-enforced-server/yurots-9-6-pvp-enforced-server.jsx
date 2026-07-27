import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-9-6-pvp-enforced-server');
}

export default function Yurots96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-9-6-pvp-enforced-server" />;
}
