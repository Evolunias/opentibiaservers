import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-non-pvp-server-chile');
}

export default function ZuneraOtNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-non-pvp-server-chile" />;
}
