import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-custom-map-server-canada');
}

export default function ZuneraOtCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-custom-map-server-canada" />;
}
