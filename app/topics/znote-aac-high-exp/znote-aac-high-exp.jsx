import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-high-exp');
}

export default function ZnoteAacHighExpKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-high-exp" />;
}
