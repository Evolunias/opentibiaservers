import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-real-map-server-germany');
}

export default function ZuneraOtRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-real-map-server-germany" />;
}
