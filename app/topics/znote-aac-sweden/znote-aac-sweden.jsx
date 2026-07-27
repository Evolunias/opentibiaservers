import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-sweden');
}

export default function ZnoteAacSwedenKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-sweden" />;
}
