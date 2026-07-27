import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-15-pvp-enforced-server');
}

export default function ZuneraOt15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-15-pvp-enforced-server" />;
}
