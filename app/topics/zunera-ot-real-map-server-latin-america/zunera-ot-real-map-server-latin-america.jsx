import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-real-map-server-latin-america');
}

export default function ZuneraOtRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-real-map-server-latin-america" />;
}
