import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-custom-map-server-north-america');
}

export default function ZuneraOtCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-custom-map-server-north-america" />;
}
