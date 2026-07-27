import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-real-map-servers-argentina');
}

export default function ZuneraOtRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-real-map-servers-argentina" />;
}
