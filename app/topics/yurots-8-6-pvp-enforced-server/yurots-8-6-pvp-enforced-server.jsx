import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-6-pvp-enforced-server');
}

export default function Yurots86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-6-pvp-enforced-server" />;
}
