import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-real-map-server-argentina');
}

export default function ZuneraOtRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-real-map-server-argentina" />;
}
