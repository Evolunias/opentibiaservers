import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-10-0-pvp-enforced-server');
}

export default function ZuneraOt100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-10-0-pvp-enforced-server" />;
}
