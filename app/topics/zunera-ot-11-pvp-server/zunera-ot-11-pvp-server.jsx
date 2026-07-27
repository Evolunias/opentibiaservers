import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-11-pvp-server');
}

export default function ZuneraOt11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-11-pvp-server" />;
}
