import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-custom-map-server-sweden');
}

export default function ZuneraOtCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-custom-map-server-sweden" />;
}
