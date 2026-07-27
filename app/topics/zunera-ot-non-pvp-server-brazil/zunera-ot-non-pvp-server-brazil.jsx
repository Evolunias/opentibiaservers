import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-non-pvp-server-brazil');
}

export default function ZuneraOtNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-non-pvp-server-brazil" />;
}
