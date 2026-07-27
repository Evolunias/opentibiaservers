import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-7-4-non-pvp-server');
}

export default function ZuneraOt74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-7-4-non-pvp-server" />;
}
