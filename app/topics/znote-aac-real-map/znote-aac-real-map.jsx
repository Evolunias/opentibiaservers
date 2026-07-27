import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-real-map');
}

export default function ZnoteAacRealMapKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-real-map" />;
}
