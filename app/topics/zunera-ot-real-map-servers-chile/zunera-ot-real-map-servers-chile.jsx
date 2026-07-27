import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-real-map-servers-chile');
}

export default function ZuneraOtRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-real-map-servers-chile" />;
}
