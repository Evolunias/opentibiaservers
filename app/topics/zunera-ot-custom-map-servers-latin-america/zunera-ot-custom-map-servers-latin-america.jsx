import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-custom-map-servers-latin-america');
}

export default function ZuneraOtCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-custom-map-servers-latin-america" />;
}
