import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-10-0-pvp-server');
}

export default function ZuneraOt100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-10-0-pvp-server" />;
}
