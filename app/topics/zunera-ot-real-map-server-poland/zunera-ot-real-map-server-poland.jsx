import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-real-map-server-poland');
}

export default function ZuneraOtRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-real-map-server-poland" />;
}
