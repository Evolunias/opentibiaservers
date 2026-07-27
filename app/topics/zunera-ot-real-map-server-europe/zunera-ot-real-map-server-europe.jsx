import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-real-map-server-europe');
}

export default function ZuneraOtRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-real-map-server-europe" />;
}
