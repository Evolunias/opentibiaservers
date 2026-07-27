import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-custom-map-servers-usa');
}

export default function ZuneraOtCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-custom-map-servers-usa" />;
}
