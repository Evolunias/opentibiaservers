import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-custom-map-servers-south-america');
}

export default function ZuneraOtCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-custom-map-servers-south-america" />;
}
