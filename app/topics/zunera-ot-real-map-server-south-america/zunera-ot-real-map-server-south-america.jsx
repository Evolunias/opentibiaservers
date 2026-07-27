import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-real-map-server-south-america');
}

export default function ZuneraOtRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-real-map-server-south-america" />;
}
