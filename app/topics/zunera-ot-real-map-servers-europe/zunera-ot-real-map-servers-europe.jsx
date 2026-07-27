import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-real-map-servers-europe');
}

export default function ZuneraOtRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-real-map-servers-europe" />;
}
