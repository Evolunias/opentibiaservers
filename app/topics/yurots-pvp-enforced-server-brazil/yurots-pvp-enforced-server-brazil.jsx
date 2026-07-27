import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp-enforced-server-brazil');
}

export default function YurotsPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp-enforced-server-brazil" />;
}
