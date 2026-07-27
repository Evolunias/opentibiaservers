import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-13-pvp-server');
}

export default function ZuneraOt13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-13-pvp-server" />;
}
