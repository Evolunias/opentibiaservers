import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-real-map-servers-latin-america');
}

export default function ZuneraOtRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-real-map-servers-latin-america" />;
}
