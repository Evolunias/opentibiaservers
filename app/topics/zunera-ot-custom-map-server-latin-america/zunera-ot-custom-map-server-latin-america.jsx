import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-custom-map-server-latin-america');
}

export default function ZuneraOtCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-custom-map-server-latin-america" />;
}
