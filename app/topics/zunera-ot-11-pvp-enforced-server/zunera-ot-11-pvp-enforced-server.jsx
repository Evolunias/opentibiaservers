import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-11-pvp-enforced-server');
}

export default function ZuneraOt11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-11-pvp-enforced-server" />;
}
