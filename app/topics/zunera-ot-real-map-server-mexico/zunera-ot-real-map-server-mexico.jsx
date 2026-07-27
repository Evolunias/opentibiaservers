import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-real-map-server-mexico');
}

export default function ZuneraOtRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-real-map-server-mexico" />;
}
