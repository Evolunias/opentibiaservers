import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-germany');
}

export default function ZnoteAacGermanyKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-germany" />;
}
