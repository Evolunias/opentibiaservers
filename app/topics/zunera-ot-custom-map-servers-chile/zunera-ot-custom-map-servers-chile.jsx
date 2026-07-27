import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-custom-map-servers-chile');
}

export default function ZuneraOtCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-custom-map-servers-chile" />;
}
