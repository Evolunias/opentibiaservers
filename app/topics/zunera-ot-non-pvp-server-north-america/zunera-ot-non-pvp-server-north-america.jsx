import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-non-pvp-server-north-america');
}

export default function ZuneraOtNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-non-pvp-server-north-america" />;
}
