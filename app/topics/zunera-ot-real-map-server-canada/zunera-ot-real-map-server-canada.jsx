import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-real-map-server-canada');
}

export default function ZuneraOtRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-real-map-server-canada" />;
}
