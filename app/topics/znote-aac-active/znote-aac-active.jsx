import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-active');
}

export default function ZnoteAacActiveKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-active" />;
}
