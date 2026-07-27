import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-custom-map-server-mexico');
}

export default function ZuneraOtCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-custom-map-server-mexico" />;
}
