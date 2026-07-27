import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-real-map-server-usa');
}

export default function ZuneraOtRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-real-map-server-usa" />;
}
