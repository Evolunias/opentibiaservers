import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-custom-map-server-south-america');
}

export default function ZuneraOtCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-custom-map-server-south-america" />;
}
