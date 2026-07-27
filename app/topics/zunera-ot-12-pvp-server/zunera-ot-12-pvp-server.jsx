import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-12-pvp-server');
}

export default function ZuneraOt12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-12-pvp-server" />;
}
