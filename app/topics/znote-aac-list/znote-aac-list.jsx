import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-list');
}

export default function ZnoteAacListKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-list" />;
}
