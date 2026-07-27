import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac');
}

export default function ZnoteAacKeywordPage() {
  return <StaticKeywordPage slug="znote-aac" />;
}
