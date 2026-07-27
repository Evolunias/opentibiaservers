import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-real-map-servers-usa');
}

export default function ZuneraOtRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-real-map-servers-usa" />;
}
