import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp-enforced-server-france');
}

export default function YurotsPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp-enforced-server-france" />;
}
