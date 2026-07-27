import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-real-map-servers-poland');
}

export default function ZuneraOtRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-real-map-servers-poland" />;
}
