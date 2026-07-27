import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-14-pvp-server');
}

export default function ZuneraOt14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-14-pvp-server" />;
}
