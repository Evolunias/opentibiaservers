import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-real-map-servers-north-america');
}

export default function ZuneraOtRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-real-map-servers-north-america" />;
}
