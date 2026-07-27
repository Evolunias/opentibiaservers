import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvp-server-brazil');
}

export default function ZuneraOtPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvp-server-brazil" />;
}
