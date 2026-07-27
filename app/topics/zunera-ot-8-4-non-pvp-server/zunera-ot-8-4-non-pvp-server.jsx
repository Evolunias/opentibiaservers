import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-8-4-non-pvp-server');
}

export default function ZuneraOt84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-8-4-non-pvp-server" />;
}
