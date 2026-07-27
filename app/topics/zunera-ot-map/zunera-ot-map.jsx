import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-map');
}

export default function ZuneraOtMapKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-map" />;
}
