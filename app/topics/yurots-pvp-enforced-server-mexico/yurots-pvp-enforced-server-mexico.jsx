import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp-enforced-server-mexico');
}

export default function YurotsPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp-enforced-server-mexico" />;
}
