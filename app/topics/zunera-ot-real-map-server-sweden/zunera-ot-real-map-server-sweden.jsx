import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-real-map-server-sweden');
}

export default function ZuneraOtRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-real-map-server-sweden" />;
}
