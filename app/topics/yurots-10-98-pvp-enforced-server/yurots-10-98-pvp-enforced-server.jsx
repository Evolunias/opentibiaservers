import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-10-98-pvp-enforced-server');
}

export default function Yurots1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-10-98-pvp-enforced-server" />;
}
