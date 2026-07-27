import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-real-map-server-chile');
}

export default function ZuneraOtRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-real-map-server-chile" />;
}
