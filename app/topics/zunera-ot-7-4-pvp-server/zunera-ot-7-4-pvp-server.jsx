import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-7-4-pvp-server');
}

export default function ZuneraOt74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-7-4-pvp-server" />;
}
