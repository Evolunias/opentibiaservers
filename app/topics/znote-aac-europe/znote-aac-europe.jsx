import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-europe');
}

export default function ZnoteAacEuropeKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-europe" />;
}
