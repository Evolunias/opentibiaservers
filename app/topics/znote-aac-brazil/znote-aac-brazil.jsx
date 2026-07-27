import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-brazil');
}

export default function ZnoteAacBrazilKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-brazil" />;
}
